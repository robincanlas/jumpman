import * as React from 'react';
import * as style from './style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon, Modal, Card, Image, Button, Message, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from 'app/stores';
import { Dispatch, bindActionCreators } from 'redux';
import { WishListActions } from 'app/stores/wishlist/actions';
import { Models } from 'app/models';

namespace _Header {
	export interface Props {
		wishList?: Models.Product[];
		wishListActions?: WishListActions;
	}
}

const _Header: React.FC<_Header.Props> = ({
	wishList = [],
	wishListActions = WishListActions
}: _Header.Props) => {

	const getTotal = (): number => {
		return wishList.reduce((total, current) => { return +total + +current.price; }, 0);
	};

	const getWishList = (): JSX.Element => {
		return (
			<Modal trigger={
				<Icon size='big' name='heart'>
				<sup className={style.wishCount}>{wishList.length}</sup>
				</Icon>
			} closeIcon>
				<Modal.Header>You have {wishList.length} item(s) on your wishlist</Modal.Header>
				{wishList.length === 0 ? 
				<Modal.Content>
					<Message info>
						<Message.Header>Oh! It looks empty here.</Message.Header>
						<p>You can add some products here.</p>
					</Message> 
				</Modal.Content>
				:
				<React.Fragment>
					<Modal.Content className={style.wishContent} scrolling>
						<Grid>
							{wishList.map(product => (
								<Grid.Column key={product.name} mobile={16} tablet={8} computer={4}>
									<Card.Group stackable>
										<Card fluid id={style.card}>
											<Card.Content>
												<Image
													floated='right'
													size='mini'
													src={product.image}
													wrapped
												/>
												<Card.Header>{product.name}</Card.Header>
												<Card.Meta>${product.price}</Card.Meta>
											</Card.Content>
											<Card.Content extra>
												<div className='ui two buttons'>
													<Button basic color='green'>
														Checkout
													</Button>
													<Button onClick={() => wishListActions.remove(product.id)} basic color='red'>
														Remove
													</Button>
												</div>
											</Card.Content>
										</Card>
									</Card.Group>
								</Grid.Column>
								))}
						</Grid>
					</Modal.Content>
					<Modal.Actions>
						<Button color='red' onClick={() => wishListActions.removeAll()}>
							<Icon name='remove' size='large' /> Remove All
						</Button>
						<Button color='green'>
							<Icon name='cart plus' size='large' /> Checkout All - ${getTotal()}
						</Button>
					</Modal.Actions>
				</React.Fragment>
				}
			</Modal>
		);
	};

	const getShoppingCart = () => {
		return (
			<Modal trigger={
				<Icon size='big' name='shopping cart'>
				</Icon>
			} closeIcon>
				<Modal.Header>You have {wishList.length} item(s) on your cart</Modal.Header>
				<Modal.Content>
					<Message info>
						<Message.Header>Oh! It looks empty here.</Message.Header>
						<p>You can add some products here.</p>
					</Message> 
				</Modal.Content>
			</Modal>
		);
	};

	return (
		<header id={style.header}>
			<span>
				<Link smooth to='/jumpman#home'>JUMPMAN</Link>
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
				{getWishList()}
				{getShoppingCart()}
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