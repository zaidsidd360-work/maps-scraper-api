import {
	Building2,
	DollarSign,
	Globe,
	MapPin,
	Phone,
	Star,
} from "lucide-react";
import BusinessHours from "./BusinessHours";
import BusinessImages from "./BusinessImages";
import { CustomCard } from "./Ui";

const BusinessCard = ({
	business,
}: {
	business: {
		name: string;
		full_address: string;
		phone_number?: string;
		website?: string;
		rating: number;
		review_count: number;
		working_hours?: Record<string, string[]>;
		photos?: string[];
		types?: string[];
		price_level?: number;
	};
}) => {
	const {
		name,
		full_address,
		phone_number,
		website,
		rating,
		review_count,
		working_hours,
		photos,
		types,
		price_level,
	} = business;

	return (
		<CustomCard className="mb-6">
			<div className="p-6">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-bold">{name}</h2>
					<div className="flex items-center text-yellow-500">
						<Star className="w-5 h-5 fill-current" />
						<span className="ml-1">{rating}</span>
						<span className="text-sm text-gray-500 ml-2">
							({review_count} reviews)
						</span>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-start gap-2">
						<MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
						<span>{full_address}</span>
					</div>

					{phone_number && (
						<div className="flex items-center gap-2">
							<Phone className="w-4 h-4" />
							<a
								href={`tel:${phone_number}`}
								className="text-blue-600 hover:underline"
							>
								{phone_number}
							</a>
						</div>
					)}

					{website && (
						<div className="flex items-center gap-2">
							<Globe className="w-4 h-4" />
							<a
								href={website}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline truncate"
							>
								{website}
							</a>
						</div>
					)}

					<div className="flex items-center gap-2">
						<Building2 className="w-4 h-4" />
						<div className="flex flex-wrap gap-2">
							{types?.map((type, index) => (
								<span
									key={index}
									className="bg-gray-100 px-2 py-1 rounded-full text-sm"
								>
									{type}
								</span>
							)) || <span>No types available</span>}
						</div>
					</div>

					{price_level && (
						<div className="flex items-center gap-2">
							<DollarSign className="w-4 h-4" />
							<span>{"$".repeat(price_level)}</span>
						</div>
					)}

					{working_hours && <BusinessHours hours={working_hours} />}
					{photos && photos.length > 0 && (
						<BusinessImages photos={photos} />
					)}
				</div>
			</div>
		</CustomCard>
	);
};

export default BusinessCard;
