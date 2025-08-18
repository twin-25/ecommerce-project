import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import './App.css'
import { HomePage } from './pages/HomePage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage/>}></Route>
      <Route path="/orders" element={<OrdersPage/>}></Route>
      <Route path="/tracking" element={<TrackingPage/>}></Route>

    </Routes>
    
  )
}

export default App
