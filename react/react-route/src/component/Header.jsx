import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="header">
      <ul>
        <li>
          <Link to="/" className="link2">Home</Link>
        </li>
        <li>
          <Link to="/about" className="link2">About</Link>
        </li>
        <li>
          <Link to="/login" className="link2">Login</Link>
        </li>
       
      </ul>
      </div>
    </>
  );
}

export default Header;
