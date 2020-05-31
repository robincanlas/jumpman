import { handleActions } from 'redux-actions';
import { Models } from 'app/models';
import { ProductState, initialState } from '../state';
import update from 'immutability-helper';
import { ActionType } from 'app/constants';

export const productReducer = handleActions<ProductState, Models.Product[]>(
	{
		[ActionType.GET_PRODUCT_REQUEST]: (state, action) => {
			return {
				...state,
				isLoading: true
			};
		},
		[ActionType.GET_PRODUCT_SUCCESS]: (state, action) => {
			return update(state, {
				products: { $set: action.payload },
				isLoading: { $set: false }
			});
		},
		[ActionType.GET_PRODUCT_FAILURE]: (state, action) => {
			return {
				...state,
				isLoading: false,
				error: 'ERROR FETCHING PRODUCTS'
			};
		},
	},
	initialState
);
