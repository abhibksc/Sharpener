import { useContext ,useEffect } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM,{ createPortal } from 'react-dom';
import { Context } from '../Context';

const Cart = () => {
    const {showCart,setShowCart} = useContext(Context);
    useEffect(()=>{
      if(showCart===true){
        document.body.style.overflowY = "hidden"
      }
      else{
        document.body.style.overflowY = "scroll"
      };
    },[showCart])



    // console.log(closeModal);
    return showCart && ReactDOM.createPortal(
        <>
            <div className='fixed inset-0 bg-black opacity-90'>
                <div className=" fixed top-1/4 right-72 p-3 transform -translate-x-1/2 -translate-y-1/2 my-auto w-screen  max-w-96 rounded-lg  text-black bg-slate-50 shadow-lg border-2">

          

                    <div className="flex justify-between p-2">
                        <span className='font-bold'>Total Amount</span>
                        <span className='font-bold'>{42}</span>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button className='rounded-full border border-amber-800 text-red-900 hover:bg-amber-800 hover:text-white px-2' onClick={()=>setShowCart(false)}>Close</button>
                        <button className='rounded-full border border-amber-800 text-red-900 hover:bg-amber-800 hover:text-white px-2'>Order</button>
                    </div>
                </div>
            </div>
        </>,

        document.getElementById('roots')

    );
}

export default Cart;




