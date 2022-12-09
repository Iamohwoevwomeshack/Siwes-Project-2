import {useState} from "react"

function Header(){

    const [activeHam, setAtiveHam] = useState(false);

    const menuItems = (
        <>
            <a href="/#">Home</a>
            <a href="/#">Benefit</a>
            <a href="/#">Courses</a>
            <a href="/#">SIWES</a>
            <a href="/#" id="sign-in">Sign In</a>
            <a href="/#" id="sign-up">Sign Up</a>
        </>
    )

    return(<div className="navbar-container">
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                <img src="./images/uniben-logo-2.png" alt="logo"/>
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