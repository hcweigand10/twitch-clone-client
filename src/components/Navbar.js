import React, { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () => {

    const logOut = () => {
        console.log("logout")
    }

    return (
        <div className="custom-navbar" style={{width: "100%"}}>
            <div class="ui secondary pointing menu">
                <Link class="active item" to="/">Home</Link>
                <Link class="item" to="/">Page 2</Link>
                <Link class="item" to="/">Page 3</Link>
                <div class="right menu">
                    <button class="ui item button" onClick={logOut}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
