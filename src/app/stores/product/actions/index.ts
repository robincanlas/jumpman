import * as _ from 'lodash';
import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Models } from 'app/models';
import Axios from 'axios';

type Thunk = ThunkAction<Promise<void>, {}, {}, AnyAction>;

export namespace ProductActions {
	export enum Type {
		GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST',
		GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
		GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE',
	}

	export const getProducts = (): Thunk => {
		const request = createAction(Type.GET_PRODUCT_REQUEST);
		const success = createAction<Models.Product[]>(Type.GET_PRODUCT_SUCCESS);
		const failure = createAction<string>(Type.GET_PRODUCT_FAILURE);

		return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
			dispatch(request());
			return Axios.get('')
			.then(response => {
				dispatch(success(response.data));
			})
			.catch(error => {
				dispatch(failure(error));
			});

		};
	};
}

export type ProductActions = Omit<typeof ProductActions, 'Type'>;
