import { createContext, useContext } from "react";
import { CartContext } from "./CartContext"

export const UserCartContext = createContext();

export const UseCartContext = () => {
    return useContext(CartContext);
}