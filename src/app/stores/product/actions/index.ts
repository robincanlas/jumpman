import * as _ from 'lodash';
import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Models } from 'app/models';
import { endpointUrl, ActionType } from 'app/constants';
import axios from 'axios';

type Thunk = ThunkAction<Promise<void>, {}, {}, AnyAction>;

export namespace ProductActions {
	export const getProducts = (): Thunk => {
		const request = createAction(ActionType.GET_PRODUCT_REQUEST);
		const success = createAction<Models.Product[]>(ActionType.GET_PRODUCT_SUCCESS);
		const failure = createAction<string>(ActionType.GET_PRODUCT_FAILURE);

		return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
			dispatch(request());
			return axios.get(endpointUrl.shoes)
			.then(response => {
				dispatch(success(response.data));
			})
			.catch(error => {
				dispatch(failure(error));
			});

		};
	};
}

export type ProductActions = typeof ProductActions;
