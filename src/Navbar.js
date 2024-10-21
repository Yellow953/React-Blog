import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link 
                    to="/articles/create" 
                    style={{
                        color: "white",
                        backgroundColor: 'blue',
                        borderRadius: '8px',
                        padding: '8px 16px'
                    }} 
                >
                    New Article
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
