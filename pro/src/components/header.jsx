import "./header.css"
import {Fragment} from "react";
import {NavLink} from "react-router-dom";
function Header() {
    return (
        <Fragment>
            <header>
                <nav>
                   <div className="container">
                       <ul className="navbar">
                          <NavLink to="/" className="navbr_menu_item">Home Page</NavLink>
                           <span className="linia"></span>
                           <NavLink to="/caunter" className="navbr_menu_item">Caunters</NavLink>
                           <span className="linia"></span>
                           <NavLink to="/accaunt" className="navbr_menu_item">Accounts</NavLink>
                       </ul>
                   </div>
                </nav>
            </header>
        </Fragment>
    );
}

export default Header;