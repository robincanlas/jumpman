import * as React from 'react';
import * as style from './style.css';
import { Image } from 'semantic-ui-react';

export namespace HomePage {
	export interface Props {
	}
	export interface State {
	}
}

export const HomePage: React.FC<HomePage.Props> = (props: HomePage.Props) => {
	return (
		<div id='home' className={style.home}>
			<div>
				<Image src='https://res.cloudinary.com/speedforce/image/upload/v1589709329/jordan/wallpaper_ivene5.jpg' />
			</div>
		</div>
	);
};
