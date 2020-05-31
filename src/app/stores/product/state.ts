import { Models } from 'app/models';

export const initialState: ProductState = {
	products: [],
	isLoading: true,
	error: null
};

export type ProductState = {
	products: Models.Product[];
	isLoading: boolean;
	error: string | null;
};
