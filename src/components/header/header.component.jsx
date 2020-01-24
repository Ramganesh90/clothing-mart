import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from "../../redux/reducer/user/user.action";

const Header = ({ currentUser }) => (
    <div className="header">
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
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))

})

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);