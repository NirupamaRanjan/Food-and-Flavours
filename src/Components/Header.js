import React from "react";
import { LOGO_URL } from "../../utils/constants";
import "./header.css"



const  Header=()=>(
    <div className="header-cont"> 

        <div className="logo-cont">
        <img alt="Logo" className="logo-img"
        src={LOGO_URL}></img>
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