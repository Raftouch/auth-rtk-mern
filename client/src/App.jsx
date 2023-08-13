import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default App
