import * as React from 'react';
import * as style from './style.css';

export const AboutPage: React.FC = () => {
	return(
		<div className={style.about} id='about'>
			<p>The "Jumpman" logo is owned by Nike to promote the Air Jordan brand of basketball sneakers and other sportswear. It is the silhouette of former NBA player and current Charlotte Hornets owner Michael Jordan.</p>
		</div>
	);
};