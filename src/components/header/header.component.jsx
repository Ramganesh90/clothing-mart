import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/" >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>

            {currentUser ? (
                <Link className='option' to="/" onClick={() => auth.signOut()}>
                    {currentUser.displayName},  LOG OUT
                </Link>
            ) : (
                    <Link className='option' to='/signin'>
                        LOG IN
                </Link>
                )}
        </div>

    </div>
)

export default Header;