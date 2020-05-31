import secrets from 'app/secrets';
import thunk from 'redux-thunk';
import { productReducer } from './product/reducers';
import { ProductState } from './product/state';
import { WishListState } from './wishlist/state';
import { wishListReducer } from './wishlist/reducers';
import {
	applyMiddleware,
	combineReducers,
	createStore,
	Store
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { logger } from 'app/middlewares';
import { ReduxCompatibleReducer } from 'redux-actions';
import { Models } from 'app/models';

export interface RootState {
	productState: ProductState;
	wishListState: WishListState;
}

export function configureStore(initialState?: RootState): Store<RootState> {
	let middleware = applyMiddleware(thunk);

	if (secrets.app.environment !== 'production') {
		middleware = composeWithDevTools(middleware);
	}

	const rootReducer = combineReducers<RootState>({
		productState: productReducer as ReduxCompatibleReducer<ProductState, Models.Product[]>,
		wishListState: wishListReducer as ReduxCompatibleReducer<WishListState, Models.Product>
	});

	const store = createStore(rootReducer as any, initialState as any, middleware) as Store<
		RootState
	>;

	if (module.hot) {
		module.hot.accept('app/stores', () => {
			const nextReducer = require('app/stores');
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}

export * from './product/reducers';
export * from './wishlist/reducers';
