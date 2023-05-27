import { createContext, useEffect, useContext, useReducer } from "react"
import axios from "axios"
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions"

import reducer from "../reducers/product_reducer"

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
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
    }
  }

  useEffect(() => {
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductsContext)
}
