import { NavLink, Outlet } from "react-router-dom"
import "./styles.css"
const Header = () => {
  return (
    <>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li className="prod"><NavLink to="/">Home</NavLink></li>
        <li className="prod1"><NavLink to="/cart">Cart</NavLink></li>
      </ul>
      <Outlet />
    </>
  )
}

export default Header