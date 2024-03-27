import React, {  createContext, useState ,useEffect } from "react";



export const Context = createContext({});

export const ContextProvider = ({ children }) => {
    const [arr, setArr] = useState([]);
    const [showCart,  setShowCart] = useState(false);


    useEffect(()=>{
        setArr(

            [
                {
                    item : "Sushi",
                    description : "Finest fish and veggies",
                    price : "₹250"
                }, 
                {
                    item : "Schnitzel",
                    description : "A german speciality!",
                    price : "₹290"  
                }, 
                {
                    item : "Barbecue Burger",
                    description : "Finest fish and veggies",
                    price : "₹350"
                    
                }, 
                {
                    item : "2 McAloo Tikki Burger + 2 Fries (L)",
                    description : "Stay home, stay safe and share a combo",
                    price : "₹450"
                }, 
                {
                    item : "6 Pc Chicken Nuggets + McChicken Burger + Coke",
                    description : "Tender and juicy chicken patty cooked to perfection",
                    price : "₹550"
                }, 
                {
                    item : "McSpicy Paneer Burger + 2 Fries M + McAloo Tikki",
                    description : "Get the best value in your meal for 2.",
                    price : "₹510"
                }, 
                {
                    item : "Chicken Nuggets Wrap",
                    description : "Serves with Ketchup",
                    price : "₹150"
                }, 
                {
                    item : "Prawns Wrap",
                    description : "Comes with Ketchup | A delightfully wholesome combo of irresistibly",
                    price : "₹450"
                }]

        )
    },[])

        console.log(arr);





    return <Context.Provider value={{ arr, setArr ,showCart, setShowCart}}>
        {children}
    </Context.Provider>
}