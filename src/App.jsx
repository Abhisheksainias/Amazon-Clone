import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import Cartdetails from './component/Cartdetails';
import '../src/component/style.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartdetails />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
