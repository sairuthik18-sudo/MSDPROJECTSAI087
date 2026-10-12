import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
            <Link to="/home.jsx">Home</Link>
            <Link to="/about.jsx">About us</Link>
            <Link to="/contact">Contact us</Link>
        </div>
    );
}
export default Header