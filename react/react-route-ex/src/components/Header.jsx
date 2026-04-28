import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
<h1>This is a Header page</h1>
<ul>
   
 <li><Link to="/">This is a home page</Link>
</li>

 <li><Link to="/about">This is a About page</Link>
</li>

 <li><Link to="/contact">This is a Contact page</Link>
</li>
</ul>
        </>
    );
}
export default Header