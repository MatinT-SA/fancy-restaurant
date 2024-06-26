import React, { Fragment } from "react";
import classes from './Header.module.css'
import Pizza from '../../assets/pizza.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Fancy Restaurant</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["our-image"]}>
                <img src={Pizza} alt='Delicious Pizza' />
            </div>
        </Fragment>
    )
}

export default Header;