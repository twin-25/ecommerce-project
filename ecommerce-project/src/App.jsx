import { Routes, Route } from 'react-router'
import { CheckoutPage } from './assets/pages/CheckoutPage'
import './App.css'
import { HomePage } from './assets/pages/HomePage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage/>}></Route>

    </Routes>
    
  )
}

export default App
