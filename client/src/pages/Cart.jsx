import { React, useState } from "react"
import styled from "styled-components"
import { Header, Product, Map } from "../components/index"
import { useProductContext } from "../context/product_context"
import axios from "axios"

const submitHandler = (formData, order, sum) => {
  return async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/v1/orders", {
        ...formData,
        order,
        totalPrice: sum,
      })
      console.log("Handle the successfull response")
    } catch (error) {
      console.log(error)
    }
  }
}

const onChangeHandler = (prevVal, action) => {
  return (e) => {
    action({ ...prevVal, [e.target.name]: e.target.value })
  }
}

const Cart = () => {
  const [inputsValue, setInputsValue] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  })
  const { cart, orderSum } = useProductContext()

  return (
    <Wrapper>
      <Header />
      <div className="delivery-app__cart-container">
        <div className="delivery-app__cart-form">
          <form
            name="form"
            onSubmit={submitHandler(inputsValue, cart, orderSum)}
          >
            <Map></Map>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={inputsValue.name}
                onChange={onChangeHandler(inputsValue, setInputsValue)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChangeHandler(inputsValue, setInputsValue)}
                value={inputsValue.email}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                value={inputsValue.phone}
                onChange={onChangeHandler(inputsValue, setInputsValue)}
              />
            </div>
            <div>
              <label htmlFor="address">Adress</label>
              <input
                type="text"
                name="address"
                id="address"
                value={inputsValue.address}
                onChange={onChangeHandler(inputsValue, setInputsValue)}
              />
            </div>
            <button type="submit">Submit</button>
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
                  count={product.count}
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
          Total price: <span>{orderSum}</span>
        </p>
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
    flex-direction: column;
  }

  .delivery-app__cart-form > form > div > * {
    flex: 1;
  }

  .delivery-app__cart-form > form > button {
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem 0.8rem;
    border-radius: 10px;
    outline: none;
    border: none;
    max-width: 300px;
    align-self: center;
  }

  .delivery-app__cart-content {
    overflow: scroll;
    overflow-x: hidden;
    flex: 1.3;

    display: flex;
    flex-direction: column;
    gap: 1rem;

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
    width: 100%;
  }

  .delivery-app__submit-button-container {
    display: flex;
    justify-content: flex-end;
    margin: 3rem;
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
