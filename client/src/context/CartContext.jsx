import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [Cart, setCart] = useState([]);

useEffect(() => {
let existingCartItem = localStorage.getItem("cart");
if (existingCartItem) setCart(JSON.parse(existingCartItem))
}, []);


 return (
        <CartContext.Provider value={[Cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};
export default CartContext;