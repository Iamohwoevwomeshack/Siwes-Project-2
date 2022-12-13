import {useState} from "react"
import unibenLogo2 from "../images/uniben-logo-2.png";

function Header(){

    const [activeHam, setAtiveHam] = useState(false);

    const menuItems = (
        <>
            <a href="/Siwes-Project-2/home">Home</a>
            <a href="/Siwes-Project-2/study-features">Benefit</a>
            <a href="/Siwes-Project-2/study-programs">Courses</a>
            <a href="/Siwes-Project-2/about">SIWES</a>
            <a href="/Siwes-Project-2/sign-in" id="sign-in">Sign In</a>
            <a href="/Siwes-Project-2/sign-up" id="sign-up">Sign Up</a>
        </>
    )

    return(<div className="navbar-container">
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                <img src={unibenLogo2} alt="Img" />
                </div>
                <div className="nav-menu">
                    {menuItems}
                </div>
                <button className={activeHam ? "hambuger active-hamburger" : "hambuger"} onClick={() => setAtiveHam(!activeHam)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
        {activeHam && <div className="nav-dropdown">{menuItems}</div>}
    </div>)
}

export default Header;