import * as React from 'react';
import * as style from './style.css';
import { Product } from 'app/components';
import { Models } from 'app/models';
import { connect } from 'react-redux';
import { RootState } from 'app/stores';
import { Dispatch, bindActionCreators } from 'redux';
import { ProductActions } from 'app/stores/product/actions';

namespace _ShopPage {
	export interface Props {
		products?: Models.Product[];
		productActions?: ProductActions;
	}
}

const _ShopPage: React.FC<_ShopPage.Props> = ({ 
	// DEFAULT PROPS
	products = [], productActions = ProductActions 
}: _ShopPage.Props) => {

	return (
		<div id='shop' className={style.shop}>
			<div className={style.list}>
				{products.map((product, index) => (
					<Product data={product} index={index} key={index} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state: RootState): Pick<_ShopPage.Props, 'products'> => {
	return {
		products: state.productState.products
	};
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<_ShopPage.Props, 'productActions'> => ({
	productActions: bindActionCreators(ProductActions, dispatch)
});

export const ShopPage: React.FC<_ShopPage.Props> = connect(mapStateToProps, mapDispatchToProps)(_ShopPage);