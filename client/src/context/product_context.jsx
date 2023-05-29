import { createContext, useContext, useReducer } from "react"

import axios from "axios"
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  CHANGE_SHOP,
  ADD_IN_CART,
  CLEAR_CART,
  SET_IN_CART,
  CALCULATE_ORDER_SUM,
  REMOVE_FROM_CART,
} from "../actions"

import reducer from "../reducers/product_reducer"

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  currentShop: "McDonald's",
  cart: [],
  orderSum: 0,
}

const ProductsContext = createContext()

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })

    try {
      const response = await axios.get(url)
      const operations = response.data
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: operations })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
      console.log(error)
    }
  }

  const changeShop = (name) => {
    dispatch({ type: CHANGE_SHOP, payload: name })
  }

  const addInCart = (id, count) => {
    dispatch({ type: ADD_IN_CART, payload: { id } })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
    calculateOrderSum()
  }

  const setInCart = (id, count) => {
    dispatch({ type: SET_IN_CART, payload: { id, count } })
  }

  const calculateOrderSum = () => {
    dispatch({ type: CALCULATE_ORDER_SUM })
  }

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { id } })
    calculateOrderSum()
  }

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchProducts,
        changeShop,
        addInCart,
        clearCart,
        setInCart,
        calculateOrderSum,
        removeFromCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductsContext)
}
