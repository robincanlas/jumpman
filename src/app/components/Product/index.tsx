import * as React from 'react';
import * as style from './style.css';
import { Card, Icon, Image, Modal, Header, Button } from 'semantic-ui-react';
import { Models } from 'app/models';

export namespace Product {
	export interface Props {
		data: Models.Product;
		index: number;
	}
}

export const Product: React.FC<Product.Props> = (props: Product.Props) => {
	const [wish, setToWish] = React.useState(false);
	const [modalOpen, setModalOpen] = React.useState(false);

	const wishThis = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.stopPropagation();
		setToWish(!wish);
	};

	const onCloseModal = () => {
		setModalOpen(false);
	};

	const getCard = (): JSX.Element => {
		return (
			<Card onClick={() => setModalOpen(true)} id={style.card} fluid>
				<Image className={style.image} src={props.data.image} wrapped ui={false} />
				<span className={style.sizes}>Sizes: 8, 9, 10, 11, 12</span>
				<Card.Content>
					<Card.Header>{props.data.name}</Card.Header>
					<Card.Meta className={style['date-icon']}>
						<span className='date'>2020</span>
						<span>
							<Icon onClick={wishThis} size='large' name='heart' color={wish ? 'red' : undefined}  />
						</span>
					</Card.Meta>
					<Card.Description>
						${props.data.price}
					</Card.Description>
				</Card.Content>
			</Card>
		);
	};

	const getModal = (): JSX.Element => {
		return (
			<Modal onClose={onCloseModal} open={modalOpen} trigger={getCard()}>
				<Modal.Header>Buy the {props.data.name}?</Modal.Header>
				<Modal.Content image>
					<Image size='medium' src={props.data.image} />
					<Modal.Description>
						<Header as='h2'>{props.data.name}</Header>
						<p>
							Product #: 1917500{props.index}
						</p>
						<Header as='h3'>Made For Fashionable Athleticism</Header>
						<p>
							Maintain your confident style on and off the court with this pair of Jordan Men's {props.data.name} shoes. Designed to keep up with athletic activities and offer flair for everyday wear, the shoe's features can be easily paired with different outfits. Rounding out its complete look, the Jumpman logo on the ankle makes an athletic statement, and the words “Team Jordan” on the heel reinforce the message.
						</p>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button color='red' onClick={onCloseModal}>
						<Icon name='remove' size='large' /> Cancel
					</Button>
					<Button color='green' onClick={onCloseModal}>
						<Icon name='cart plus' size='large' /> Buy
					</Button>
				</Modal.Actions>
			</Modal>
		);
	};

	return getModal();
};