import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";


const HeaderCartButton = props => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

    const cartCtx = useContext(CartContext)

    const { items } = cartCtx;

    const cartItemsNumber = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        // if we return a function in useEffect, this will be called automatically as a cleanup function
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
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