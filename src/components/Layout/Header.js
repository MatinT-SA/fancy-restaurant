import React, { Fragment } from "react";
import classes from './Header.module.css'
import Pizza from '../../assets/pizza.jpg'

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Fancy Restaurant</h1>
                <button className={classes.button}>
                    <span className={classes["button-front"]}>
                        Cart
                    </span>
                </button>
            </header>
            <div className={classes["our-image"]}>
                <img src={Pizza} alt='Delicious Pizza' />
            </div>
        </Fragment>
    )
}

export default Header;