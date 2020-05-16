import * as React from 'react';
import * as style from './style.css';
import { Jumpman } from 'app/components';

export namespace Loader {
	export interface Props {
		disableLoading: () => void;
	}
}

export const Loader: React.FC<Loader.Props> = (props: Loader.Props) => {
	const [count, setCount] = React.useState(0);
	let start: number = 0;

	React.useEffect(() => {
		const counter = setInterval(() => {
			if (start >= 100) {
				clearInterval(counter);
				document.body.style.overflowY = 'auto';
				props.disableLoading();
				return;
			}
			start++;
			setCount(start);
		}, 1000 / 60);

		return(() => {
			clearInterval(counter);
		});
	}, []);

	return (
		<div className={`${style.loader} ${count >= 100 ? style.hide : ''}`}>
			<div className={style.content}>
				<Jumpman />
				<div className={style.barContainer}>
					<div style={{width: `${count}%`}} className={style.bar}></div>
				</div>
				<div>LOADING</div>
			</div>
		</div>
	);
};