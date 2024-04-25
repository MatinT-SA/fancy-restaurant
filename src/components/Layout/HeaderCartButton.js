import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)

    const cartItemsNumber = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    } , 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes["button-front"]}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span className={classes.text}>
                    My Cart
                </span>
                <span className={classes.badge}>
                    {cartItemsNumber}
                </span>
            </span>
        </button>
    )
}

export default HeaderCartButton;