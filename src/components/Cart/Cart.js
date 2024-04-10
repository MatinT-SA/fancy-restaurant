import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = props => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'f1', name: 'Chicken Kebab', amount: 2, price: 25.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Price</span>
                <span>49.54</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;