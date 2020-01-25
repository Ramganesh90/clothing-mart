import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from "../../../src/assets/images/shopping-bag.svg"

import "./cart-icon.styles.scss";
import { toggleCartHidden } from "./../../redux/reducer/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/reducer/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);