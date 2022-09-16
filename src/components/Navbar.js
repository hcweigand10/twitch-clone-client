import React, { useState } from "react";
import {Link} from "react-router-dom"

import GoogleAuth from "./GoogleAuth";

const Navbar = () => {

    return (
        <div className="custom-navbar" style={{width: "100%"}}>
            <div class="ui secondary pointing menu">
                <Link class="active item" to="/">Home</Link>
                <Link class="item" to="/">Page 2</Link>
                <Link class="item" to="/">Page 3</Link>
                <div class="right menu">
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
