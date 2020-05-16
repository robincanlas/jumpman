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
		return (			
			<React.Fragment>
				{this.state.isLoading ?
					<Loader disableLoading={this.disableLoading} /> :
					<span>
						<Header />
						<div className={style.jumpman}>
							<Jumpman />
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
