import * as React from 'react';
import * as style from './style.css';
import { Product } from 'app/components';
import { Models } from 'app/models';

export namespace ShopPage {
	export interface Props {
		shoes: Models.Product[];
	}
}

export const ShopPage: React.FC<ShopPage.Props> = ({ shoes = [] }: ShopPage.Props) => {
	// const [isOpen, setIsOpen] = React.useState<boolean>(false);

	return (
		<div id='shop' className={style.shop}>
			<div className={style.list}>
				{shoes.map((shoe, index) => (
					<Product data={shoe} index={index} key={index} />
				))}
			</div>
		</div>
	);
};