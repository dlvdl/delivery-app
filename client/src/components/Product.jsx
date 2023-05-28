import React from "react"
import styled from "styled-components"
import { useProductContext } from "../context/product_context"

const clickHandler = (addInCart, id) => {
  return (e) => {
    addInCart(id)
  }
}

const Product = ({ image, caption, inCart, id }) => {
  const { addInCart } = useProductContext()
  return (
    <Wrapper>
      <div
        className={
          inCart !== null
            ? "delivery-app__product-container"
            : "delivery-app__product-container-inCart"
        }
      >
        <img src={`src/assets/${image}`} alt="" />

        {inCart !== null ? (
          <>
            <p className="delivery-app__product-caption">{caption}</p>
            <button
              className="delivery-app__product-button"
              onClick={clickHandler(addInCart, id)}
            >
              add to Cart
            </button>
          </>
        ) : (
          <div className="delivery-app__product-container-inCart-content">
            <p className="delivery-app__product-caption">{caption}</p>
            <input type="number" />
            <button className="delivery-app__product-button">Remove</button>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .delivery-app__product-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    background-color: #18181a;
    border-radius: 10px;
    padding: 1rem;
  }

  .delivery-app__product-container-inCart {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    background-color: #18181a;
    /* border: 2px solid black; */
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
  }

  .delivery-app__product-container-inCart-content {
    display: flex;
    align-items: end;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    padding: 0;
  }

  .delivery-app__product-container-inCart-content > button {
    align-self: flex-end;
  }

  .delivery-app__product-container > img,
  .delivery-app__product-container-inCart > img {
    border-radius: 10px;
    display: flex;
    flex: 1;
    width: 300px;
    max-height: 200px;
  }

  .delivery-app__product-container,
  .delivery-app__product-container-inCart {
    max-width: 300px;
    max-height: 300px;
  }

  .delivery-app__product-button {
    align-self: flex-end;
    cursor: pointer;
    padding: 0.5rem 0.8rem;
    border-radius: 10px;
    outline: none;
    border: none;
  }

  .delivery-app__product-container-inCart-content > input {
    font-size: 14px;
    border: none;
    padding: 12px;
    border-radius: 10px;
    appearance: none;
    max-width: 200px;
  }
`

export default Product
