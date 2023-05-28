import React from "react"
import styled from "styled-components"

const Shop = ({ title, logo }) => {
  return (
    <Wrapper>
      <div className="delivery-app__shop-container">
        <p>{title}</p>
        <div className="delivery-app__logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .delivery-app__shop-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(24, 24, 26);
    border-radius: 10px;
    margin: 0 30px;
    min-height: 100px;
    padding: 10px;
    cursor: pointer;
  }

  .delivery-app__shop-container:hover {
    transform: scale(1.05);
    opacity: 0.7;
  }

  .delivery-app__shop-container > p {
    pointer-events: none;
  }

  .delivery-app__logo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .delivery-app__logo > img {
    max-width: 100px;
  }
`

export default Shop
