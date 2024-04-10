import CartContext from "./cart-context";

const CartProvider = props => {
    const addItemCartHandler = item =>{}

    const removeItemCartHandler = id =>{}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;