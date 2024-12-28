import { Search } from "lucide-react";
import { SetStateAction, useState } from "react";
import { CustomButton, CustomInput } from "./Ui";

interface SearchFormProps {
	onSubmit: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
	const [query, setQuery] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(query);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex gap-2 max-w-2xl mx-auto mb-8"
		>
			<CustomInput
				type="text"
				value={query}
				onChange={(e: { target: { value: SetStateAction<string> } }) =>
					setQuery(e.target.value)
				}
				placeholder="Search for businesses..."
				className="flex-1"
			/>
			<CustomButton type="submit">
				<Search className="w-4 h-4 mr-2" />
				Search
			</CustomButton>
		</form>
	);
};

export default SearchForm;
