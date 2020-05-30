import { Models } from 'app/models';

export const initialState: ProductState = {
	products: []
};

export type ProductState = {
	products: Models.Product[];
};
