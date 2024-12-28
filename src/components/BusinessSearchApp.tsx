import { useState } from "react";
import SearchForm from "./SearchForm";

// import BusinessCard from "./BusinessCard";
import { dataCache } from "../helpet";
import BusinessTable, { BusinessCardProps } from "./BusinessTable";
import useDownloadCSV from "../hooks/UseDownloadCSV";
import { CustomButton } from "./Ui";
import BusinessFilter from "./BusinessFilter";

const BusinessSearchApp = () => {
	const [businesses, setBusinesses] = useState<
		Array<{
			business_id: string;
			name: string;
			full_address: string;
			phone_number?: string | undefined | null;
			website?: string | undefined | null;
			rating: number;
			review_count: number;
			working_hours?: Record<string, string[]>;
			photos?: string[];
			types: string[];
			price_level?: string | undefined | null;
		}>
	>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [filteredBusinesses, setFilteredBusinesses] = useState<
		Array<BusinessCardProps>
	>([]);

	const { downloadCSV } = useDownloadCSV("business-table");

	const handleSearch = async (query: string) => {
		setLoading(true);
		setError(null);

		try {
			// const response = await fetch(
			// 	`https://websitescraperapi.com/scrapeGoogleMaps?query=${encodeURIComponent(
			// 		query
			// 	)}&limit=20`,
			// 	{
			// 		headers: {
			// 			Authorization:
			// 				"Bearer ec18a646eefd7fc043a015d5c4cedf56021e8288a18bb8cd779d98f7356e5a07",
			// 			"Content-Type": "application/json",
			// 		},
			// 	}
			// );

			// const data = await response.json();
			// console.log(data);

			// if (data.status === "ok") {
			// 	setBusinesses(data.data);
			// } else {
			// 	setError("Failed to fetch results");
			// }
			setBusinesses(dataCache.data);
			setFilteredBusinesses(dataCache.data); // Initialize filtered businesses
		} catch (err) {
			setError(`An error occurred while fetching results + ${err}`);
		} finally {
			setLoading(false);
		}
	};

	const handleFilter = ({
		hasWebsite,
		minRating,
		minReview,
	}: {
		hasWebsite: boolean;
		minRating: number;
		minReview: number;
	}) => {
		const filtered = businesses.filter((business) => {
			const meetsWebsiteCriteria = hasWebsite ? !!business.website : true;
			const meetsRatingCriteria = business.rating >= minRating;
			return meetsWebsiteCriteria && meetsRatingCriteria;
		});
		setFilteredBusinesses(filtered);
	};

	return (
		<div className="w-full mx-auto p-6">
			<h1 className="text-3xl font-bold text-center mb-8">
				Business Search
			</h1>

			<SearchForm onSubmit={handleSearch} />

			{loading && <div className="text-center py-8">Loading...</div>}

			{error && (
				<div className="text-red-500 text-center py-4">{error}</div>
			)}

			{!loading && businesses.length > 0 && (
				<div className="w-min overflow-auto justify-self-center">
					<div className="flex items-center justify-between">
						<CustomButton
							className="mb-5"
							type="button"
							onClick={downloadCSV}
						>
							Download CSV
						</CustomButton>
						<BusinessFilter onFilter={handleFilter} />
					</div>

					<BusinessTable businesses={filteredBusinesses} />
				</div>
			)}
			{/* {businesses.length > 0 ? (
				<div className="space-y-6">
					{businesses.map((business) => (
						<BusinessCard
							key={business.business_id}
							business={business}
						/>
					))}
				</div>
			) : (
				!loading && (
					<div className="text-center text-gray-500 py-8">
						No results to display. Try searching for businesses!
					</div>
				)
			)} */}
		</div>
	);
};

export default BusinessSearchApp;
