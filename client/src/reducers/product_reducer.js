import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  CHANGE_SHOP,
  ADD_IN_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_IN_CART,
  CALCULATE_ORDER_SUM,
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
      const positionInCart = state.cart.findIndex(
        (c) => c._id == action.payload.id
      )
      const product = state.products.find(
        (product) => product._id === action.payload.id
      )

      if (positionInCart === -1) {
        return { ...state, cart: [...state.cart, { ...product, count: 1 }] }
      }

      const increasedCart = state.cart.map((item) => {
        if (item._id === action.payload.id) {
          return { ...item, count: item.count + 1 }
        }
        return item
      })

      return {
        ...state,
        cart: increasedCart,
      }

    case CLEAR_CART:
      return { ...state, cart: [] }

    case SET_IN_CART:
      const updatedCart = state.cart.map((item) => {
        if (item._id === action.payload.id) {
          return { ...item, count: action.payload.count }
        }
        return item
      })

      return {
        ...state,
        cart: updatedCart,
      }

    case CALCULATE_ORDER_SUM:
      const sum = state.cart.reduce((prev, curr) => {
        return prev + curr.count * curr.price
      }, 0)

      return { ...state, orderSum: sum }

    case REMOVE_FROM_CART:
      const newCart = state.cart.filter(
        (product) => product._id !== action.payload.id
      )

      return { ...state, cart: newCart }

    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default products_reducer
