import * as React from 'react';
import * as style from './style.css';
import { HomePage, AboutPage, ContactPage, ShopPage } from 'app/pages';
import { Header, Jumpman, Loader } from 'app/components';

export namespace App {
	export interface Props {

	}

	export interface State {
		isLoading: boolean;
	}
}

export class App extends React.Component<App.Props, App.State> {
	constructor(props: App.Props, context?: any) {
		super(props, context);

		this.state = {
			isLoading: true
		};

		this.disableLoading = this.disableLoading.bind(this);
	}

	public disableLoading() {
		this.setState({
			isLoading: false
		});
	}

	public render() {
		const quote: string = `"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."`;
		const author: string = '-Michael Jordan';

		return (			
			<React.Fragment>
				{this.state.isLoading ?
					<Loader disableLoading={this.disableLoading} /> :
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
						<ShopPage />
						<AboutPage />
						<ContactPage />
					</span>
				}
		</React.Fragment> 
		);
	}
}
