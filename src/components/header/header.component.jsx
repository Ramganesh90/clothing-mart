import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from "../../redux/reducer/user/user.action";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/reducer/user/user.selector";
import { selectCartHidden } from "../../redux/reducer/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <h1 style={{ "textAlign": "center", "position": "absolute", "left": "42%" }}>CLOTHING MART</h1>
        <Link className="logo-container" to="/" >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>

            {currentUser ? (
                <Link className='option' to="/signin" onClick={() => auth.signOut()}>
                    LOG OUT
                </Link>
            ) : (
                    <Link className='option' to='/signin'>
                        LOG IN
                </Link>
                )}
            <CartIcon />
        </div>
        {
            hidden ? "" :
                <CartDropDown />}
    </div>
)

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))

})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);