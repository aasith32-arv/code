import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
<h1>This is a Header page</h1>

<div className='nav'>
<ul>
   
 <li><Link to="/" className='linknav'>Home</Link>
</li>

 <li><Link to="/about" className='linknav'>About</Link>
</li>

 <li><Link to="/login" className='linknav'>Login</Link>
</li>
</ul>
</div>
        </>
    );
}
export default Header;