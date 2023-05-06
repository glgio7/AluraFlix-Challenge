import { createContext, useState } from "react";
import {
	ICategory,
	categoriesProviderProps,
	ICategoriesContext,
} from "./types";

export const CategoriesContext = createContext<ICategoriesContext>(
	{} as ICategoriesContext
);

const CategoriesProvider = ({ children }: categoriesProviderProps) => {
	const [categories, setCategories] = useState<ICategory[]>([
		{
			title: "Front End",
			color: "#6BD1FF",
			subtitle: "Formação Front End da Alura",
		},
		{
			title: "Data Science",
			color: "#69953B",
			subtitle: "Formação Data Science na Alura",
		},
		{
			title: "Mobile",
			color: "#FFBA05",
			subtitle: "Formação Mobile da Alura",
		},
	]);

	const contextValues = {
		categories,
		setCategories,
	};
	return (
		<CategoriesContext.Provider value={contextValues}>
			{children}
		</CategoriesContext.Provider>
	);
};

export default CategoriesProvider;
