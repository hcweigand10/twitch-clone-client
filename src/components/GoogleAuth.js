import React, { useState, useEffect } from "react";

import { signIn, signOut } from "../actions";
import { connect } from "react-redux";
import { set } from "lodash";

const GoogleAuth = ({ dispatch }) => {
    const [signedIn, setSignedIn] = useState(null);
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId: process.env.REACT_APP_CLIENT_ID,
                    scope: "email",
                    plugin_name: "Streamy",
                })
                .then(() => {
                    setAuth(window.gapi.auth2.getAuthInstance());
                });
        });
    }, []);

    useEffect(() => {
        if (auth) {
            onAuthChange()
            auth.isSignedIn.listen(onAuthChange)
        }
    }, [auth]);

    const onAuthChange = () => {
        setSignedIn(auth.isSignedIn.get());
    };

    const signInClick = () => {
        auth.signIn();
    };

    const signOutClick = () => {
        auth.signOut();
        // window.location.reload()
    };

    return (
        <>
            {signedIn ? (
                <button
                    className="ui item google button"
                    onClick={signOutClick}
                >
                    <i className="google icon" />
                    Sign out
                </button>
            ) : (
                <button className="ui item button" onClick={signInClick}>
                    <i className="google icon" />
                    Sign in with Google
                </button>
            )}
        </>
    );
};

export default GoogleAuth;
