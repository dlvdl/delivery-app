import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
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
        products_error: action.payload,
      }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default products_reducer
