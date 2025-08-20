import './OrdersPage.css';
import axios from 'axios';
import { Header } from '../../components/Header';
import { useState, useEffect, Fragment } from 'react';
import { OrdersGrid } from './OrdersGrid';

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProducts = async ()=>{
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data)

    }
    fetchProducts();
  }, []);

  return (
    <>
      <title>OrdersPage</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
          <OrdersGrid orders={orders} loadCart = {loadCart} />
      </div>
    </>
  )
}