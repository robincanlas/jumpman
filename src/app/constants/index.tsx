export const endpointUrl: { [key: string]: string; } = {
	shoes: 'https://robincanlas-server.herokuapp.com/jumpman/shoes'
};

export enum ActionType {
	GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST',
	GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
	GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE',
}