import * as React from 'react';
import * as style from './style.css';
import { Product } from 'app/components';
import { Models } from 'app/models';
import { connect } from 'react-redux';
import { RootState } from 'app/stores';
import { Dispatch, bindActionCreators } from 'redux';
import { ProductActions } from 'app/stores/product/actions';
import { WishListActions } from 'app/stores/wishlist/actions';

namespace _ShopPage {
	export interface Props {
		products?: Models.Product[];
		wishList?: Models.Product[];

		productActions?: ProductActions;
		wishListActions?: WishListActions;
	}
}

const _ShopPage: React.FC<_ShopPage.Props> = ({ 
	// DEFAULT PROPS
	products = [], 
	wishList = [],
	productActions = ProductActions, 
	wishListActions = WishListActions
}: _ShopPage.Props) => {

	return (
		<div id='shop' className={style.shop}>
			<div className={style.list}>
				{products.map((product, index) => (
					<Product data={product} wishList={wishList} wishListActions={wishListActions} index={index} key={index} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state: RootState): Pick<_ShopPage.Props, 'products' | 'wishList'> => {
	return {
		products: state.productState.products,
		wishList: state.wishListState.list
	};
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<_ShopPage.Props, 'wishListActions' | 'productActions'> => ({
	productActions: bindActionCreators(ProductActions, dispatch),
	wishListActions: bindActionCreators(WishListActions, dispatch)
});

export const ShopPage: React.FC<_ShopPage.Props> = connect(mapStateToProps, mapDispatchToProps)(_ShopPage);