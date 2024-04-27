import Home from './components/Home.jsx'
import CartPage from './components/CartPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App