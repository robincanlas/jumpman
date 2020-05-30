import * as React from 'react';
import * as style from './style.css';
import { HomePage, AboutPage, ContactPage, ShopPage } from 'app/pages';
import { Header, Jumpman, Loader } from 'app/components';
import { Models } from 'app/models';
import axios from 'axios';
import useSWR from 'swr';

export namespace App {
	export interface Props {

	}

	export interface State {
		isLoading: boolean;
	}
}

export const App: React.FC<App.Props> = ({}: App.Props) => {
	const [isLoading, setIsLoading] = React.useState(true);

	const fetcher = (url: string) =>
	axios.get(url)
		.then(r => r.data)
		.then((shoes: Models.Product[]) => {
			return shoes;
		});

	const { data }: any = useSWR('https://robincanlas-server.herokuapp.com/jumpman/shoes', fetcher);

	const disableLoading = () => {
		setIsLoading(false);
	};

	const quote: string = `"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."`;
	const author: string = '-Michael Jordan';

	return (			
		<React.Fragment>
			{isLoading ?
				<Loader disableLoading={disableLoading} /> :
				<span>
					<Header />
					<div className={style.jumpman}>
						<Jumpman />
						<div>
							<p>{quote}</p>
							<p>{author}</p>
						</div>
					</div>
					<HomePage />
					<ShopPage shoes={data} />
					<AboutPage />
					<ContactPage />
				</span>
			}
	</React.Fragment> 
	);
}
