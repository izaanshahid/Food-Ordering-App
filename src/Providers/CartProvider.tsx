import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem } from "../types";
import {randomUUID} from 'expo-crypto';

export const CartContext = createContext({});

const CartProvider=({children}: PropsWithChildren)=>{
    const [item, setItem] = useState<CartItem[]>([])

    const addItem = (product, size)=>{

        const existingItem = item.find(item=>item.product===product&&item.size===size)
        if(existingItem){
            updateQuantity(existingItem.id,1);
            return;
        }

        const newCartItem={
            id:randomUUID(),
            product,
            product_id:product.id,
            size,
            quantity:1,
        } 
        setItem([newCartItem, ...item])
    }

    const updateQuantity=(itemId, amount)=>{
        setItem(
            item.map((item)=>
            item.id !== itemId?
            item:{...item,quantity:item.quantity+amount}
            ).filter((item)=>item.quantity>0)
        )

    }

    const cost= item.reduce((sum,item)=>(sum+=item.product.price*item.quantity),0)
    const total = parseFloat(cost.toFixed(2));


    return(
        <CartContext.Provider
        value={{items:item, addItem, updateQuantity, total}}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext)