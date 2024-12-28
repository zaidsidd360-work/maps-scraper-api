import { Clock } from "lucide-react";

// BusinessHours Component
const BusinessHours = ({ hours }: { hours: Record<string, string[]> }) => {
	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	return (
		<div className="mt-4">
			<h3 className="font-semibold mb-2 flex items-center">
				<Clock className="w-4 h-4 mr-2" />
				Working Hours
			</h3>
			<div className="grid grid-cols-2 gap-2">
				{days.map((day) => (
					<div key={day} className="text-sm">
						<span className="font-medium">{day}:</span>{" "}
						{hours[day]?.[0] || "Closed"}
					</div>
				))}
			</div>
		</div>
	);
};

export default BusinessHours;
