import { NavLink, Outlet } from "react-router-dom"

import "./styles.css"
import { useContext } from "react"
import CartContext from "../CartContext"
const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cart">Cart {cart.length ? `(${cart.length})` : ""}</NavLink></li>
      </ul>
      <Outlet />
    </>
  )
}

export default Header