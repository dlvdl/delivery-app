import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cart, Shop } from "./pages/index.js"
import { initialState } from "./context/initial_state.jsx"

import styled from "styled-components"

function App() {
  localStorage.setItem("initialState", JSON.stringify(initialState))
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
