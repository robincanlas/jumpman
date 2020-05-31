import { handleActions } from 'redux-actions';
import { Models } from 'app/models';
import { WishListState, initialState } from '../state';
import { ActionType } from 'app/constants';

export const wishListReducer = handleActions<WishListState, Models.Product | number>(
	{
		[ActionType.ADD_TO_WISHLIST]: (state, action) => {
			const updatedList: Models.Product[] = [...state.list, action.payload as Models.Product];
			return {
				list: updatedList
			};
		},
		[ActionType.REMOVE_TO_WISHLIST]: (state, action) => {
			const copyArray: Models.Product[] = state.list.filter(element => element.id !== action.payload);
			return {
				list: copyArray
			};
		},
		[ActionType.REMOVE_ALL_TO_WISHLIST]: (state, action) => {
			return {
				list: []
			};
		}
	},
	initialState
);
