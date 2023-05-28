import React from "react"
import styled from "styled-components"
import { Header, Product } from "../components/index"
import { useProductContext } from "../context/product_context"
import { countBy } from "../helpers/countBy"

const Cart = () => {
  const { cart } = useProductContext()
  const countedOrder = countBy(cart, (item) => item._id)
  return (
    <Wrapper>
      <Header />
      <div className="delivery-app__cart-container">
        <div className="delivery-app__cart-form">
          <form>
            <div>
              <input type="text" name="name" />
              <label htmlFor="name">Name</label>
            </div>
            <div>
              <input type="email" name="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="phone" name="phone" />
              <label htmlFor="phone">Phone</label>
            </div>
            <div>
              <input type="text" name="adress" />
              <label htmlFor="adress">Adress</label>
            </div>
          </form>
        </div>

        <div className="delivery-app__cart-content">
          {cart.length > 0 ? (
            cart.map((product) => {
              return (
                <Product
                  key={product._id}
                  caption={product.name}
                  image={product.image}
                  id={product._id}
                  inCart={null}
                />
              )
            })
          ) : (
            <h1>Cart is empty</h1>
          )}
        </div>
      </div>
      <div className="delivery-app__submit-button-container">
        <p>
          Total price: <span>999</span>
        </p>
        <button>Submit</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .delivery-app__cart-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .delivery-app__cart-form {
    flex: 1;
  }

  .delivery-app__cart-form form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 1rem;
  }

  .delivery-app__cart-form > form > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
  }

  .delivery-app__cart-form > form > div > * {
    flex: 1;
  }

  .delivery-app__cart-content {
    overflow: scroll;
    overflow-x: hidden;
    flex: 1.3;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 500px;
    padding: 0 5rem;
  }

  .delivery-app__cart-content > h1 {
    text-align: center;
  }

  .delivery-app__cart-content > div {
    max-width: 300px;
  }

  .delivery-app__cart-form input {
    font-size: 14px;
    border: none;
    padding: 12px;
    border-radius: 10px;
    appearance: none;
  }

  .delivery-app__submit-button-container {
    display: flex;
    justify-content: flex-end;
    margin: 3rem 0;
    align-items: center;
    gap: 2rem;
  }

  .delivery-app__submit-button-container > p {
    font-size: 2rem;
  }

  .delivery-app__submit-button-container > button {
    font-size: 2rem;

    cursor: pointer;
    padding: 0.5rem 0.8rem;
    border-radius: 10px;
    outline: none;
    border: none;
  }
`

export default Cart
