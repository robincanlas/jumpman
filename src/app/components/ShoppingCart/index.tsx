import * as React from 'react';
import { Modal, Message } from 'semantic-ui-react';
import { RootState } from 'app/stores';
import { Models } from 'app/models';
import { WishListActions } from 'app/stores/wishlist/actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export namespace _ShoppingCart {
	export interface Props {
		trigger: JSX.Element;
		wishList?: Models.Product[];
		
		wishListActions?: WishListActions;
	}
}

export const _ShoppingCart: React.FC<_ShoppingCart.Props> = ({
	trigger,
}: _ShoppingCart.Props) => {
	return (
		<Modal trigger={
			trigger
		} closeIcon>
			<Modal.Header>You have 0 item(s) on your cart</Modal.Header>
			<Modal.Content>
				<Message info>
					<Message.Header>Oh! It looks empty here.</Message.Header>
					<p>You can add some products here.</p>
				</Message> 
			</Modal.Content>
		</Modal>
	);
};

const mapStateToProps = (state: RootState): Pick<_ShoppingCart.Props, 'wishList'> => {
	return {
		wishList: state.wishListState.list
	};
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<_ShoppingCart.Props, 'wishListActions'> => ({
	wishListActions: bindActionCreators(WishListActions, dispatch)
});

export const ShoppingCart: React.FC<_ShoppingCart.Props> = connect(mapStateToProps, mapDispatchToProps)(_ShoppingCart);