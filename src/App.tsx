import React from "react";
import "react-toastify/dist/ReactToastify.css";
import BusinessSearchApp from "./components/BusinessSearchApp";

const App: React.FC = () => {
	return (
		<div className="h-screen">
			<BusinessSearchApp />
		</div>
	);
};

export default App;
