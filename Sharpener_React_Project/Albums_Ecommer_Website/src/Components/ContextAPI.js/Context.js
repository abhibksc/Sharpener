import React, { createContext, useState, useMemo } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [arr, setArr] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [bill, setBill] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [NavBelow, setNavBelow] = useState("white");

   

    const contextValue = useMemo(() => ({
        cartCount,
        setCartCount,
        arr,
        setArr,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        bill,
        setBill,
        NavBelow, setNavBelow
    }), [cartCount, NavBelow,arr, showCart, cartItems, bill]);

    return <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
};
