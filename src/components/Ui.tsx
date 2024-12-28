export const CustomInput = ({ className = "", ...props }) => (
	<input
		className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
		{...props}
	/>
);
// Custom Button Component
export const CustomButton = ({
	children,
	className = "",
	type,
	onClick,
	...props
}: {
	children: React.ReactNode;
	className?: string;
	type: "submit" | "reset" | "button" | undefined;
	onClick: () => void;
}) => (
	<button
		className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center ${className}`}
		{...props}
		type={type}
		onClick={onClick}
	>
		{children}
	</button>
);

export const CustomCard = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={`bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 ${className}`}
	>
		{children}
	</div>
);
