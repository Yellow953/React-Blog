import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Page Not Found...</h2>
            <Link to="/" className="btn btn-primary">Back to Home Page...</Link>
        </div>
    );
}
 
export default NotFound;