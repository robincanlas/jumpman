import * as React from 'react';
import * as style from './style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from 'app/stores';
import { Dispatch, bindActionCreators } from 'redux';
import { WishListActions } from 'app/stores/wishlist/actions';
import { Models } from 'app/models';
import { Wishlist, ShoppingCart } from 'app/components';

namespace _Header {
	export interface Props {
		wishList?: Models.Product[];
		wishListActions?: WishListActions;
		setVisible: (visible: boolean) => void;
	}
}

const _Header: React.FC<_Header.Props> = ({
	wishList = [],
	wishListActions = WishListActions,
	setVisible
}: _Header.Props) => {

	return (
		<header id={style.header}>
			<span>
				<Link smooth to='/jumpman#home'>JUMPMAN</Link>
			</span>
			<span>
			<div className={style.burger} onClick={() => setVisible(true)}>
				<div className={style.bar1}></div>
				<div className={style.bar2}></div>
				<div className={style.bar3}></div>
			</div>
			</span>
			<span>
				<Link smooth to='/jumpman#shop'>shop</Link>
			</span>
			<span>
				<Link smooth to='/jumpman#about'>about</Link>
			</span>
			<span>
				<Link smooth to='/jumpman#contact'>contact</Link>
			</span>
			<span>
				<Wishlist trigger={
					<Icon size='big' name='heart'>
						<sup className={style.wishCount}>{wishList.length}</sup>
					</Icon> } 
				/>
				<ShoppingCart trigger={
					<Icon size='big' name='shopping cart'>
					</Icon>
					} 
				/>
			</span>
		</header>
	);
};

const mapStateToProps = (state: RootState): Pick<_Header.Props, 'wishList'> => {
	return {
		wishList: state.wishListState.list
	};
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<_Header.Props, 'wishListActions'> => ({
	wishListActions: bindActionCreators(WishListActions, dispatch)
});

export const Header: React.FC<_Header.Props> = connect(mapStateToProps, mapDispatchToProps)(_Header);