import { createContext, useEffect, useContext, useReducer } from "react"
import { countBy } from "../helpers/countBy"

import axios from "axios"
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  CHANGE_SHOP,
  ADD_IN_CART,
  CLEAR_CART,
} from "../actions"

import reducer from "../reducers/product_reducer"

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  currentShop: "McDonald's",
  cart: [],
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

  const addInCart = (id) => {
    dispatch({ type: ADD_IN_CART, payload: id })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <ProductsContext.Provider
      value={{ ...state, fetchProducts, changeShop, addInCart, clearCart }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductsContext)
}
