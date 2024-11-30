
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Product from './Components/Product'
import ProductDetails from './Components/ProductDetails'
import Login from './Components/Login'
import Register from './Components/Register'
import Cart from './Components/Cart'
import ForgotPassword from './Components/ForgotPassword'
import Nopage from './Components/Nopage'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='*' element={<Nopage/>} />
      </Routes>
    </>
  )
}

export default App

