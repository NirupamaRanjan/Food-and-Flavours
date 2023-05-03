import React from "react";
import "./header.css"


// Header
//   -Logo 
//     -Image
//     -CompanyName
//  -Nav Items 
//     -About us 
//     -Contact us
//     -Cart

const Header=()=>(
    <div className="header-cont"> 

        <div className="logo-cont">
        <img alt="Logo" className="logo-img"
        src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg"></img>
        <h3 className="comp-name">Foods &amp; Flavours</h3>
        </div>

        <ul className="nav-items">
            <li>
                About us
            </li>
            <li>
                Contact us
            </li>
            <li>
                Cart
            </li>
        </ul>
       
    </div>
)

export default Header