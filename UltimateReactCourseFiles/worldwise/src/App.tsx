import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="pricing" element={<Pricing/>} />
      <Route path="*" element={<PageNotFound />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/app' element={<AppLayout/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
