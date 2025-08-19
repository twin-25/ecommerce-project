import { useEffect, useState} from "react";
import { Header } from "../../components/Header";
import './HomePage.css';
import axios from 'axios';
import { ProductsGrid } from "./ProductsGrid";


export function HomePage({cart, loadCart}) {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get('/api/products').then((response) =>{
      setProducts(response.data);
    });
  },[]);
  
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <title>Ecommerce Project</title>


      <Header cart={cart} />


      <div className="home-page">
        <ProductsGrid products = {products} loadCart={loadCart} />
      </div>
    </>
  )
}