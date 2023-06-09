import { React } from "react"
import styled from "styled-components"
import { useProductContext } from "../context/product_context"

const Product = ({ image, caption, inCart, id, count }) => {
  const { addInCart, setInCart, calculateOrderSum, removeFromCart } =
    useProductContext()

  const clickHandler = (e) => {
    addInCart(id, 1)
    calculateOrderSum()
  }

  const changeInputHandler = (e) => {
    if (+e.target.value < 0) return
    setInCart(id, e.target.value)
    calculateOrderSum()
  }

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
              onClick={clickHandler}
            >
              add to Cart
            </button>
          </>
        ) : (
          <div className="delivery-app__product-container-inCart-content">
            <p className="delivery-app__product-caption">{caption}</p>
            <input type="number" value={count} onChange={changeInputHandler} />
            <button
              className="delivery-app__product-button"
              onClick={(e) => {
                removeFromCart(id)
              }}
            >
              Remove
            </button>
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

    background-color: #18181a;
    border-radius: 10px;
    padding: 1rem;
    align-items: center;
  }

  .delivery-app__product-container-inCart {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

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
    width: 200px;

    //max-height: 200px;
  }

  .delivery-app__product-container-inCart img {
    width: 20px;
  }

  .delivery-app__product-button {
    cursor: pointer;
    padding: 0.5rem 0.8rem;
    border-radius: 10px;
    outline: none;
    border: none;
  }

  .delivery-app__product-button:hover {
    transform: scale(1.05);
    opacity: 0.7;
  }

  .delivery-app__product-button:active {
    background-color: white;
    transform: scale(1.1);
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
