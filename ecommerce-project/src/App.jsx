import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './assets/pages/HomePage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<div>Test Checkout page</div>}></Route>

    </Routes>
    
  )
}

export default App
