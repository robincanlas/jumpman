import * as React from 'react';
import * as style from './style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon, Menu, Label } from 'semantic-ui-react';
import { ShoppingCart, Wishlist } from '..';
import { Dispatch, bindActionCreators } from 'redux';
import { RootState } from 'app/stores';
import { WishListActions } from 'app/stores/wishlist/actions';
import { connect } from 'react-redux';
import { Models } from 'app/models';

export namespace _MobileMenu {
	export interface Props {
		wishList?: Models.Product[];
		wishListActions?: WishListActions;
		setVisible: (visible: boolean) => void;
	}
}

export const _MobileMenu: React.FC<_MobileMenu.Props> = ({
	wishList = [],
	setVisible
}: _MobileMenu.Props) => {
	return (
		<React.Fragment>
			<Menu.Item>
				<Link smooth to='/jumpman#home' >
					<Icon name='home' size='large' />
					Home
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link smooth to='/jumpman#shop'>
					<Icon name='cart arrow down' size='large' />
					Shop
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link smooth to='/jumpman#about'>
					<Icon name='question circle outline' size='large' />
					About
				</Link>
			</Menu.Item>
			<Menu.Item>
				<Link smooth to='/jumpman#contact'>
					<Icon name='phone square' size='large' />
					Contact
				</Link>
			</Menu.Item>
			<Menu.Item>
				<ShoppingCart 
					trigger={
						<div onClick={() => setVisible(false)}>
							<Icon name='shopping cart' size='large' />
							Cart
						</div>
					}
				/>
			</Menu.Item>
			<Menu.Item id={style.item}>
				{/* <div onClick={() => setVisible(false)}></div> */}
				<Wishlist trigger={
					<div onClick={() => setVisible(false)}>
						<Icon name='heart' size='large' />
						Wishlist
						{wishList.length > 0 && 
							<Label className={style.label} color='grey' floating>
								{wishList.length}
							</Label>
						}
					</div>
				} 
				/>
			</Menu.Item>
		</React.Fragment>
	);
};

const mapStateToProps = (state: RootState): Pick<_MobileMenu.Props, 'wishList'> => {
	return {
		wishList: state.wishListState.list
	};
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<_MobileMenu.Props, 'wishListActions'> => ({
	wishListActions: bindActionCreators(WishListActions, dispatch)
});

export const MobileMenu: React.FC<_MobileMenu.Props> = connect(mapStateToProps, mapDispatchToProps)(_MobileMenu);