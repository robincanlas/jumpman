import * as React from 'react';
import * as style from './style.css';
import { Card, Icon, Image } from 'semantic-ui-react';

export namespace Product {
	export interface Props {
		data: any;
	}
}

export const Product: React.FC<Product.Props> = (props: Product.Props) => {
	const [wish, setToWish] = React.useState(false);

	return (
		<Card id={style.card} fluid>
			<Image className={style.image} src={props.data.image} wrapped ui={false} />
			<span className={style.sizes}>Sizes: 8, 9, 10, 11, 12</span>
			<Card.Content>
				<Card.Header>{props.data.name}</Card.Header>
				<Card.Meta className={style['date-icon']}>
					<span className='date'>2020</span>
					<span>
						<Icon onClick={() => setToWish(!wish)} size='large' name='heart' color={wish ? 'red' : undefined} />
					</span>
				</Card.Meta>
				<Card.Description>
					${props.data.price}
				</Card.Description>
			</Card.Content>
		</Card>
	);
};