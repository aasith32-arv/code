
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
function App() {
 

  return (
    <>
     
      <BrowserRouter>
       <Header />
      <Routes>
       <Route path="/" element={<Home />} >
       <Route path="/about" element={<About />} />
       <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
         

       </Route>
       <Route path='*' element={<NotFound />} />
      </Routes>
          <Footer />
      </BrowserRouter>
      <Home />
      <About />
      <Login />
      <NotFound />
  
    </>
  )
}

export default App
