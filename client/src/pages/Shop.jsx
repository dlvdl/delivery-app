import React from "react"
import styled from "styled-components"
import { Header, Shops, Goods } from "../components/index"

const Shop = () => {
  return (
    <Wrapper>
      <Header />
      <div className="delivery-app__container">
        <div className="delivery-app__shops-section">
          <Shops />
        </div>
        <div className="delivery-app__goods-section">
          <Goods />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .delivery-app__container {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
  }

  .delivery-app__shops-section {
    flex: 0.7;
  }

  .delivery-app__goods-section {
    flex: 1;
    /* background-color: purple; */
  }
`

export default Shop
