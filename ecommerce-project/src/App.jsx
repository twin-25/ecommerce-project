import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import './App.css'
import { HomePage } from './pages/HomePage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { ErrorPage } from './pages/ErrorPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    axios.get('/api/cart-items').then((response) => {
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
