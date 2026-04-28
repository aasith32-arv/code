
import './App.css'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
     <h1>React-rout-ex</h1>

     <Header/>
     <Contact/>
     <About/>
     <Footer/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={}>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
