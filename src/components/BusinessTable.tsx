export interface BusinessCardProps {
	business_id: string;
	name: string;
	full_address: string;
	phone_number?: string | null;
	website?: string | null;
	rating: number;
	review_count: number;
	working_hours?: Record<string, string[]>;
	photos?: string[];
	types?: string[];
	price_level?: string | null;
}

const BusinessTable = ({ businesses }: { businesses: BusinessCardProps[] }) => {
	return (
		<table
			id="business-table"
			className="bg-white rounded-2xl overflow-hidden"
		>
			<thead>
				<tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
					<th className="py-3 px-4 text-left border-2">Name</th>
					<th className="py-3 px-4 text-left border-2">Address</th>
					<th className="py-3 px-4 text-left border-2">Phone</th>
					<th className="py-3 px-4 text-left border-2">Website</th>
					<th className="py-3 px-4 text-left border-2">Rating</th>
					<th className="py-3 px-4 text-left border-2">
						Review Count
					</th>
				</tr>
			</thead>
			<tbody className="text-gray-600 text-sm font-light">
				{businesses.map((business) => (
					<tr
						key={business.business_id}
						className="border-b border-gray-200 hover:bg-gray-100"
					>
						<td className="py-3 px-4 border-2 min-w-[150px]">
							{business.name}
						</td>
						<td className="py-3 px-4 border-2 min-w-[150px]">
							{business.full_address}
						</td>
						<td className="py-3 px-4 border-2 min-w-[150px]">
							{business.phone_number || "N/A"}
						</td>
						<td className="py-3 px-4 border-2 max-w-[200px]">
							<div className="break-words overflow-hidden">
								{business.website || "N/A"}
							</div>
						</td>
						<td className="py-3 px-4 border-2 min-w-[150px]">
							{business.rating}
						</td>
						<td className="py-3 px-4 border-2 min-w-[150px]">
							{business.review_count}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default BusinessTable;
