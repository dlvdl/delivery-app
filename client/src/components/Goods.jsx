import React from "react"
import styled from "styled-components"
import { Product } from "./index.js"
import { bigMac, kfcBucket } from "./import.js"

const Goods = () => {
  return (
    <Wrapper>
      <div className="delivery-app__gods-container">
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
        <Product caption="Big Big Burger" image={bigMac} />
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
