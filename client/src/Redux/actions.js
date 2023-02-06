import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const { REACT_APP_HOST } = process.env;

export function getAllProducts(){
    return async dispatch => {
        const { data } = await axios(`${REACT_APP_HOST}/products`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data
        });
    }
};

