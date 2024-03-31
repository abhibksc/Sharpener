import React, { createContext, useState, useEffect, useMemo } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [arr, setArr] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [bill, setBill] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [shoeDetails, setShoeDetails] = useState({});

    useEffect(() => {
        
    }, []);

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
        shoeDetails,
        setShoeDetails
    }), [cartCount, arr, showCart, cartItems, bill, shoeDetails]);

    return <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
};
