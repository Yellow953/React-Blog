const Navbar = () => {
    const handleNewArticle = (e) => {
        e.preventDefault();
        console.log('hello world');
    };

    return ( 
        <nav className="navbar">
            <h1>React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a 
                    href="/create" 
                    style={{
                        color: "white",
                        backgroundColor: 'blue',
                        borderRadius: '8px',
                        padding: '8px 16px'
                    }} 
                    onClick={handleNewArticle}
                >
                    New Article
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;
