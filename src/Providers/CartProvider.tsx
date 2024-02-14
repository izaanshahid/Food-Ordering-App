import { PropsWithChildren, createContext, useContext } from "react";

export const CartContext = createContext({});

const CartProvider=({children}: PropsWithChildren)=>{
    return(
        <CartContext.Provider
        value={{items:[], onAddItem:()=>{}}}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext)