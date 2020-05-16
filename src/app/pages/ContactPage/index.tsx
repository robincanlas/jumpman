import * as React from 'react';
import * as style from './style.css';

export const ContactPage: React.FC = () => {
	return(
		<div id='contact' className={style.contact}>
			<p>
				Contact me for more of my Projects @ 
				<a target='_blank' href='https://kristofferrobincanlas.com/contact'>kristofferrobincanlas.com</a> 
			</p>
		</div>
	);
};