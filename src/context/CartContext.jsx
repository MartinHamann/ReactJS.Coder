import React, { useState, useContext} from 'react'

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const removeProduct = (id) => setCart(cart.filter(productos => productos.id !== id));

    const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
	};

    const totalProducts = () =>
    cart.reduce(
        (acumulador, productoActual) => acumulador + productoActual.cantidad,
        0,
    );

    const totalCart = () => {
        const copia = [...cart]
        let count = 0
        copia.forEach((producto) => {
            count = count + producto.cantidad
        })
        return count;
    }

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
        totalCart,
        totalPrice,
        totalProducts,
        cart,

    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider