import * as React from 'react';
import * as style from './style.css';
import { Image } from 'semantic-ui-react';
import wallpaper from './wallpaper.jpg';

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
				<Image src={wallpaper} />
			</div>
		</div>
	);
};
