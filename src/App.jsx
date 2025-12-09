import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import AppRoutes from './Routes/AppRoutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <CartProvider>
      <Navbar />
      <div className='bg-gray-50'>
        <AppRoutes />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <Footer />
    </CartProvider>
  )
}

export default App
