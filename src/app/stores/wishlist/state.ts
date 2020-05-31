import { Models } from 'app/models';

export const initialState: WishListState = {
	list: [],
};

export type WishListState = {
	list: Models.Product[];
};
