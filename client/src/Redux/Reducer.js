import { GET_ALL_PRODUCTS } from "./actions"
const initialState = {
    products: [],
}

export const rootReducer = (state = initialState, {payload, type}) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}