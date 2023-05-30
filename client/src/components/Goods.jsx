import { React, useEffect } from "react"
import styled from "styled-components"
import { Product } from "./index.js"
import { bigMac, kfcBucket } from "./import.js"
import { useProductContext } from "../context/product_context"

const Goods = () => {
  const { fetchProducts, currentShop, products, products_loading } =
    useProductContext()

  useEffect(() => {
    fetchProducts(`/products/?company=${currentShop}`)
  }, [currentShop])

  return (
    <Wrapper>
      <div className="delivery-app__gods-container">
        {products !== undefined ? (
          products.map((product) => {
            return (
              <Product
                key={product._id}
                caption={product.name}
                image={product.image}
                id={product._id}
              />
            )
          })
        ) : (
          <h1>No products!</h1>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .delivery-app__gods-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 1rem;
    padding: 1rem;
    overflow: scroll;
    overflow-x: hidden;
    max-height: 800px;
    justify-items: center;
  }

  @media (max-width: 1280px) {
    .delivery-app__gods-container {
      grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
  }
`

export default Goods
