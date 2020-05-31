import * as _ from 'lodash';
import { createAction } from 'redux-actions';
import { Models } from 'app/models';
import { ActionType } from 'app/constants';

export namespace WishListActions {
	export const add = createAction<Models.Product>(ActionType.ADD_TO_WISHLIST);
	export const remove = createAction<number>(ActionType.REMOVE_TO_WISHLIST);
	export const removeAll = createAction(ActionType.REMOVE_ALL_TO_WISHLIST);
}

export type WishListActions = typeof WishListActions;
