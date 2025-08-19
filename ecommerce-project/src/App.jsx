import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { ErrorPage } from './pages/ErrorPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    axios.get('/api/cart-items?expand=product').then((response) => {
      setCart(response.data);

    })
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart= {cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart= {cart}/>}></Route>
      <Route path="/orders" element={<OrdersPage cart= {cart}/>}></Route>
      <Route path="/tracking" element={<TrackingPage/>}></Route>
      <Route path ="*" element={<ErrorPage/>}></Route>

    </Routes>
    
  )
}

export default App
