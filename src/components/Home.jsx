import { faker } from '@faker-js/faker';
import { useContext, useState } from 'react';
import SingleProduct from './SingleProduct';
import "./styles.css";
import Cart from "../CartContext";

faker.seed(100);

const Home = () => {

  const { cart, setCart } = useContext(Cart);

  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlPicsumPhotos()
  }));

  const [products] = useState(productsArray);
  return (
    <div className='productContainer'>
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />
      ))}
    </div>
  )
}

export default Home