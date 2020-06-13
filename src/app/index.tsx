import * as React from 'react';
import * as style from './style.css';
import { HomePage, AboutPage, ContactPage, ShopPage } from 'app/pages';
import { Header, Jumpman, Loader, MobileMenu } from 'app/components';
import { Sidebar, Menu } from 'semantic-ui-react';

export namespace App {
	export interface Props {

	}
}

export const App: React.FC<App.Props> = ({}: App.Props) => {
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [visible, setVisible] = React.useState<boolean>(false);

	const disableLoading = () => {
		setIsLoading(false);
	};

	const quote: string = `"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."`;
	const author: string = '-Michael Jordan';

// 	<span>
// 	<Link smooth to='/jumpman#shop'>shop</Link>
// </span>
// <span>
// 	<Link smooth to='/jumpman#about'>about</Link>
// </span>
// <span>
// 	<Link smooth to='/jumpman#contact'>contact</Link>
	
	return (			
		<React.Fragment>
			{isLoading ?
				<Loader disableLoading={disableLoading} /> :
				<Sidebar.Pushable style={{transform: 'none'}}>
					<Sidebar
						as={Menu}
						animation='overlay'
						icon='labeled'
						inverted
						onHide={() => setVisible(false)}
						vertical
						visible={visible}
						width='thin'
						style={{position: 'fixed'}}
					>
						<MobileMenu setVisible={setVisible} />
					</Sidebar>

					<Sidebar.Pusher dimmed={visible}>
						<Header visible={visible} setVisible={setVisible} />
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
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			}
	</React.Fragment> 
	);
}
