import * as React from 'react';
import * as style from './style.css';

export const ContactPage: React.FC = () => {
	const currentYear: number = new Date().getFullYear();

	return(
		<div id='contact' className={style.contact}>
			<p>
				<p>© {currentYear}, Designed {`&`} Coded by Kristoffer Robin Canlas</p>
			</p>
		</div>
	);
};