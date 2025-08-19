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
  const loadCart = async () =>{ 
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data);

    }

  useEffect(() =>{
    loadCart()
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart= {cart} loadCart={loadCart}/>} />
      <Route path="/checkout" element={<CheckoutPage cart= {cart}/>}></Route>
      <Route path="/orders" element={<OrdersPage cart= {cart}/>}></Route>
      <Route path="/tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
      <Route path ="*" element={<ErrorPage cart={cart}/>}></Route>

    </Routes>
    
  )
}

export default App
