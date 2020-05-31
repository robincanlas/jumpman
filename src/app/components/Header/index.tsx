import * as React from 'react';
import * as style from './style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon, Modal } from 'semantic-ui-react';

export namespace Header {
	export interface Props {

	}
}

export const Header: React.FC<Header.Props> = ({}: Header.Props) => {
	const getWishList = (): JSX.Element => {
		return (
			<Modal trigger={<Icon size='big' name='heart' />}>
				<Modal.Header>My WishList</Modal.Header>
				<Modal.Content>

				</Modal.Content>
			</Modal>
		);
	};

	// const getShoppingCart = () => {

	// };

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
				<Icon size='big' name='shopping cart' />
			</span>
		</header>
	);
};