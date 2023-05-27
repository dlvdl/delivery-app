import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
      <header className="delivery-app__header">
        <nav className="delivery-app__header-navbar">
          <ul role="list" className="delivery-app__navlist">
            <li className="delivery-app__header-navbar-link">
              <a href="/">Shop</a>
            </li>
            <li className="delivery-app__header-navbar-link">
              <a href="/cart">Shopping cart</a>
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .delivery-app__header .delivery-app__header-navbar {
    width: 100%;
  }

  .delivery-app__header {
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-start;
  }

  .delivery-app__navlist {
    display: flex;
    gap: 1rem;
    padding: 0;
  }

  .delivery-app__header-navbar-link {
    display: flex;
  }

  .delivery-app__header-navbar-link:not(:last-child):after {
    display: block;
    width: 2px;
    height: 30px;
    background-color: #fff;
    content: "";
    z-index: 20;
    margin-left: 1rem;
  }
`

export default Header
