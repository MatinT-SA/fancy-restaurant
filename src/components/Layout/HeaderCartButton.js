import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"


const HeaderCartButton = props => {
    return (
        <button className={classes.button}>
            <span className={classes["button-front"]}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span className={classes.text}>
                    My Cart
                </span>
                <span className={classes.badge}>
                    3
                </span>
            </span>
        </button>
    )
}

export default HeaderCartButton;