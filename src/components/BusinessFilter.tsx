// src/components/BusinessFilter.tsx
import React, { useState } from "react";

interface BusinessFilterProps {
	onFilter: (filters: {
		hasWebsite: boolean;
		minRating: number;
		minReviews: number;
	}) => void;
}

const BusinessFilter: React.FC<BusinessFilterProps> = ({ onFilter }) => {
	const [hasWebsite, setHasWebsite] = useState(false);
	const [minRating, setMinRating] = useState(0);
	const [minReviews, setMinReviews] = useState(0);

	const handleFilterChange = () => {
		onFilter({ hasWebsite, minRating, minReviews });
	};

	const handleApplyFilters = () => {
		handleFilterChange();
	};

	return (
		<div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
			<h2 className="text-xl font-bold mb-4">Filters</h2>
			<div className="flex flex-col space-y-4">
				<label className="flex items-center">
					<input
						type="checkbox"
						checked={hasWebsite}
						onChange={(e) => setHasWebsite(e.target.checked)}
						className="mr-2"
					/>
					<span>Only show businesses with a website</span>
				</label>
				<label>
					<span>Minimum Rating:</span>
					<input
						type="number"
						value={minRating}
						onChange={(e) => setMinRating(Number(e.target.value))}
						min="0"
						max="5"
						step="0.1"
						className="ml-2 border rounded p-1"
					/>
				</label>
				{/* <label>
					<span>Minimum Reviews:</span>
					<input
						type="number"
						value={minReviews}
						onChange={(e) => setMinReviews(Number(e.target.value))}
						min="0"
						className="ml-2 border rounded p-1"
					/>
				</label> */}
				<button
					onClick={handleApplyFilters}
					className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
				>
					Apply Filters
				</button>
			</div>
		</div>
	);
};

export default BusinessFilter;
