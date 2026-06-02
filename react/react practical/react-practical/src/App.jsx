
import './App.css'
import Home from './pages/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Events from './component/Events'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header />
    <Events />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contant" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
      
    
      
      
    </> 
  )
}

export default App
