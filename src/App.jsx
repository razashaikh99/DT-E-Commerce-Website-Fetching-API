import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import AppRoutes from './Routes/AppRoutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar
        isProfileOpen={isProfileOpen}
        setIsProfileOpen={setIsProfileOpen}
      />
      <div className='bg-gray-50' onClick={() => setIsProfileOpen(false)} >
        <AppRoutes />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <Footer />
    </CartProvider>
  )
}

export default App
