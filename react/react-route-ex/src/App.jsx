
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Header from './components/Header'
import NotFound from './pages/NotFound'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>



   
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>


      <Route path="*" element={<NotFound />}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App
