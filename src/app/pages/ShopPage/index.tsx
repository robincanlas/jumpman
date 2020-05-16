import * as React from 'react';
import * as style from './style.css';
import { Product } from 'app/components';

const sampleData: any[] = [
	{
		name: 'Jordan Jumpman Team II',
		image: 'https://images.footlocker.com/is/image/EBFL2/19175006?wid=264&hei=264&fmt=png-alpha',
		price: 140
	},
	{
		name: 'Jordan Jumpman 2020',
		image: 'https://images.footlocker.com/is/image/EBFL2/Q3449100?wid=264&hei=264&fmt=png-alpha',
		price: 110.00
	},
	{
		name: 'Jordan Jumpman Pro',
		image: 'https://images.footlocker.com/is/image/EBFL2/96876106?wid=264&hei=264&fmt=png-alpha',
		price: 119.99
	},
	{
		name: 'Jordan Jumpman Z',
		image: 'https://images.footlocker.com/is/image/EBFL2/Q9119001?wid=264&hei=264&fmt=png-alpha',
		price: 150.00
	},
	{
		name: 'Jordan Jumpman DNA Pro',
		image: 'https://images.footlocker.com/is/image/EBFL2/K0009001?wid=264&hei=264&fmt=png-alpha',
		price: 119.99
	},
	{
		name: 'Jordan Jumpman Swift 23',
		image: 'https://images.footlocker.com/is/image/EBFL2/T2555001?wid=264&hei=264&fmt=png-alpha',
		price: 140.00
	}
];

export const ShopPage: React.FC = () => {
	return (
		<div id='shop' className={style.shop}>
			<div className={style.list}>
				{sampleData.map(data => (
					<Product key={data.name} data={data} />
				))}
			</div>
		</div>
	);
};