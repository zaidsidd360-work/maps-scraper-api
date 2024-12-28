// src/hooks/useDownloadCSV.ts
import { useCallback } from "react";

const useDownloadCSV = (tableId: string) => {
	const downloadCSV = useCallback(() => {
		const table = document.getElementById(tableId) as HTMLTableElement;
		if (!table) return;

		let csvContent = "";
		for (let i = 0; i < table.rows.length; i++) {
			const row = table.rows[i];
			const rowData: string[] = [];
			for (let j = 0; j < row.cells.length; j++) {
				const cell = row.cells[j];
				let cellValue = cell.textContent?.replace(/,/g, "") || "";

				// Prepend a single quote for phone numbers to treat them as strings
				if (j === 2) {
					// Assuming phone number is in the 3rd column (index 2)
					cellValue = `'${cellValue}`;
				}

				rowData.push(cellValue);
			}
			csvContent += rowData.join(",") + "\r\n";
		}

		const blob = new Blob([csvContent], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "table-data.csv";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}, [tableId]);

	return { downloadCSV };
};

export default useDownloadCSV;
