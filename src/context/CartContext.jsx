import React, { useState, useContext} from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const removeProduct = (id) => setCart(cart.filter(productos => productos.id !== id));

    const addToCart = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            addProduct(producto);
        } else {
            setCart([...cart, producto]);
        }
    };

    const addProduct = (producto) => {
        const cartUpdated = cart.map((cartProduct) => {
            if (producto.id === cartProduct.id) {
                const productUpdated = {
                    ...cartProduct,
                    cantidad: cartProduct.cantidad + producto.cantidad,
                };
                return productUpdated;
            } else {
                return cartProduct;
            }
        });
        setCart(cartUpdated)
    };

    console.log('carrito', cart)
    


  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        addToCart,

    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider