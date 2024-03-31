





import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../ContextAPI.js/Context';

const Cartz = () => {



    const { setBill, Cart_Count, Bill, setCartItems, setCart_Count, CartItems, setArr, arr, showCart, setShowCart } = useContext(Context);
    useEffect(() => {
        if (showCart === true) {
            document.body.style.overflowY = "hidden"
        }
        else {
            document.body.style.overflowY = "scroll"
        };
    }, [showCart])



    // const handleminus = (e, items) => {

    //     if (items.amount >= 1) {

    //         items.amount = items.amount - 1;

    //         items.total = Bill - items.prices
    //         setBill(items.total);


    //         const obj = {
    //             item: items.item,
    //             description: items.description,
    //             price: items.price,
    //             prices : items.prices,
    //             id: items.id,
    //             amount: items.amount,
    //             total: items.total
    //         }

    //         setArr([...arr, obj])
    //         setCart_Count(Cart_Count - 1)
    //     }
    //     if(items.amount === 0){
    //         let filter = CartItems.filter((eve)=>eve.id !== items.id);
    //         setCartItems(filter);

    //     }
    // }

    // const handlePlus = (e, items) => {


    //         items.amount = items.amount + 1;


    //         items.total = items.prices + Bill
    //         setBill(items.total);


    //         const obj = {
    //             item: items.item,
    //             description: items.description,
    //             price: items.price,
    //             prices : items.prices,
    //             id: items.id,
    //             amount: items.amount,
    //             total: items.total
    //         }

    //         setArr([...arr, obj])
    //         setCart_Count(Cart_Count + 1)

    // }

    return showCart && ReactDOM.createPortal(
        <>
            <div className='fixed z-10 inset-0 bg-black opacity-90 '>
                <div className="fixed top-1/3 right-72 p-3 transform -translate-x-1/2 -translate-y-1/2 my-auto w-screen   max-w-96 rounded-lg  text-black bg-slate-50 shadow-lg border-2 flex flex-col gap-5">
                    <div className='flex justify-between'>
                        <span>{"ShoeName"}</span>
                        <span>{2}L</span>
                        <span>{2}M</span>
                        <span>{2}S</span>
                        <span>{"Price"}</span>

                    </div>

                   <div className='flex flex-col gap-2'>
                   <div className='flex justify-end gap-24'>
                        <span className='font-bold'>Total</span>
                        <span className='font-bold'>{5000}</span>
                    </div>

                    <div className='flex justify-end gap-10'>
                        <button className='border px-2 rounded-md bg-blue-200 hover:bg-green-800 shadow-lg' onClick={()=>(alert("Successfully ordered!"))}>Place Order</button>
                        <button className='border px-2 rounded-md bg-blue-200 hover:bg-red-800 shadow-lg' onClick={() => setShowCart(false)}>Cancel</button>
                    </div>
                   </div>



                </div>
            </div>
        </>,

        document.getElementById('roots')

    );
}

export default Cartz;





























// const Cart = ()=>{
//     return <div className="flex flex-row">
//          <div>
//          <span>{"ShoeName"}</span>
//          <span>{2}L</span>
//          <span>{2}M</span>
//          <span>{2}S</span>
//          </div>

//          <div>
//             <span>Total</span>
//             <span>{5000}</span>
//          </div>

//          <div>
//             <span>Place Order</span>
//             <span>Cancel</span>
//          </div>



//     </div>
// }

// export default Cart;