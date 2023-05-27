import React from "react"
import styled from "styled-components"
import { Shop } from "./index.js"
import { kfc, mcd } from "./import.js"

const Shops = () => {
  return (
    <Wrapper>
      <div className="delivery-app__shops-container">
        <h2 className="delivery-app__title">Shops:</h2>
        <div className="delivery-app__shops-content">
          <Shop title="Mc Doney" logo={kfc} />
          <Shop title="CFK" logo={mcd} />
          <Shop title="CFK" logo={mcd} />
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
`

export default Shops
