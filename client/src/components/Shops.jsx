import React from "react"
import styled from "styled-components"
import { Shop } from "./index.js"
import { kfc, mcd } from "./import.js"
import { useProductContext } from "../context/product_context"

const clickHandler = (changeShop, clearCart) => {
  return (e) => {
    const currentShop = e.target.querySelector("p").innerText
    if (currentShop) changeShop(currentShop)
    clearCart()
  }
}

const Shops = () => {
  const { changeShop, clearCart } = useProductContext()
  return (
    <Wrapper>
      <div className="delivery-app__shops-container">
        <h2 className="delivery-app__title">Shops:</h2>
        <div
          className="delivery-app__shops-content"
          onClick={clickHandler(changeShop, clearCart)}
        >
          <Shop title="McDonald's" logo={mcd} />
          <Shop title="KFC" logo={kfc} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .delivery-app__shops-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;
  }

  .delivery-app__shops-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .delivery-app__title {
    margin: 1rem 0;
    padding: 0;
    text-align: center;
  }

  .active {
    border: 2px solid white;
    transform: scale(1.05);
  }
`

export default Shops
