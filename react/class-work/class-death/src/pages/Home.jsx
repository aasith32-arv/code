import { Link } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"

function Home() {
 

  return (
    <>
      <h2>This is a Home page</h2>
      <ul>
        <li><Link to="/home">Home</Link> </li>
         <li><Link to="/about">About</Link> </li>
          <li><Link to="/login">Login</Link> </li>
      </ul>
    </>
  )
}

export default Home