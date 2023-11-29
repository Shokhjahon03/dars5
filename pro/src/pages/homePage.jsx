import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import "./hompage.css"
import Img from "../assets/Group 143.png"
function HomePage() {
    return (
        <Fragment>
            <div className="hero">
                <div className="hero_child">
                    <img className="hero_child_img" src={Img} alt="img"/>
                    <h2>Welcome to the website, add search to home work countries api counteres page and articls apiyi account page</h2>
                    <div className="links">
                        <NavLink to="/" className="navbr_menu_item">Home Page</NavLink>

                        <NavLink to="/caunter" className="navbr_menu_item">Caunters</NavLink>

                        <NavLink to="/accaunt" className="navbr_menu_item">Accounts</NavLink>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomePage;