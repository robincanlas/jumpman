import * as React from 'react';
import * as style from './style.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon } from 'semantic-ui-react';

export const Header = () => {
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
				<Icon size='big' name='shopping cart' />
			</span>
		</header>
	);
};