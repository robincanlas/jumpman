import * as React from 'react';
import * as style from './style.css';
import { Modal, Icon, Message, Grid, Card, Button, Image } from 'semantic-ui-react';
import { RootState } from 'app/stores';
import { bindActionCreators, Dispatch } from 'redux';
import { WishListActions } from 'app/stores/wishlist/actions';
import { connect } from 'react-redux';
import { Models } from 'app/models';

export namespace _Wishlist {
	export interface Props {
		trigger: JSX.Element;
		wishList?: Models.Product[];
		
		wishListActions?: WishListActions;
	}
}

export const _Wishlist: React.FC<_Wishlist.Props> = ({
	wishList = [],
	wishListActions = WishListActions,
	trigger
}: _Wishlist.Props) => {

	const getTotal = (): number => {
		return wishList.reduce((total, current) => { return +total + +current.price; }, 0);
	};

	return (
		<Modal trigger={
			trigger
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
					<Grid className={style.grid}>
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

const mapStateToProps = (state: RootState): Pick<_Wishlist.Props, 'wishList'> => {
	return {
		wishList: state.wishListState.list
	};
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<_Wishlist.Props, 'wishListActions'> => ({
	wishListActions: bindActionCreators(WishListActions, dispatch)
});

export const Wishlist: React.FC<_Wishlist.Props> = connect(mapStateToProps, mapDispatchToProps)(_Wishlist);