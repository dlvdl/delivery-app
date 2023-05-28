import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  CHANGE_SHOP,
  ADD_IN_CART,
  CLEAR_CART,
} from "../actions"

const products_reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true }

    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true }

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_loading: false,
        products: action.payload.products,
      }

    case CHANGE_SHOP:
      return { ...state, currentShop: action.payload }

    case ADD_IN_CART:
      const product = state.products.find(
        (product) => product._id === action.payload
      )

      return { ...state, cart: [...state.cart, product] }

    case CLEAR_CART:
      return { ...state, cart: [] }

    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default products_reducer
