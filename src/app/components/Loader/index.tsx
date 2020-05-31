import * as React from 'react';
import * as style from './style.css';
import { Jumpman } from 'app/components';
import { connect } from 'react-redux';
import { RootState } from 'app/stores';
import { Dispatch, bindActionCreators } from 'redux';
import { ProductActions } from 'app/stores/product/actions';

export namespace _Loader {
	export interface Props {
		disableLoading: () => void;
		isLoading?: boolean;
		error?: string | null;
		productActions?: ProductActions;
	}
}

let start: number = 0;

export const _Loader: React.FC<_Loader.Props> = ({ 
	disableLoading, 
	isLoading = true, 
	error = null, 
	productActions = ProductActions 
}: _Loader.Props) => {
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const end: number = isLoading ? 50 : 100;
		const counter = setInterval(() => {
			if (end === 100 && start === end) {
				clearInterval(counter);
				document.body.style.overflowY = 'auto';
				disableLoading();
				return;
			}
			start++;
			setCount(start);
		}, 1000 / 60);

		if (error) {
			clearInterval(counter);
		}

		return(() => {
			clearInterval(counter);
		});
	}, [isLoading, error]);

	React.useEffect(() => {
		productActions.getProducts();
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

const mapStateToProps = (state: RootState): Pick<_Loader.Props, 'isLoading' | 'error'> => {
	return {
		isLoading: state.productState.isLoading,
		error: state.productState.error
	};
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<_Loader.Props, 'productActions'> => ({
	productActions: bindActionCreators(ProductActions, dispatch)
});

export const Loader: React.FC<_Loader.Props> = connect(mapStateToProps, mapDispatchToProps)(_Loader);