import "./navbar.css";
import LOGO from '../Assets/ecohub_new.png';

function Navbar() {
    return (
        <div className = "navbar">
            <img src = {LOGO}></img>
            <div>Home</div>
            <div>About</div>
            <div>Store</div>
        </div>
    );
}

export default Navbar;