import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../ContextAPI.js/Context';
import Cart from '../Cartz/Cart';
import Cartz from '../Cartz/Cartz';


const Header = ()=>{
    const {Cart_Count, setShowCart} = useContext(Context);


    
    return <nav className=" nav">
        <h1 className="ml-36 font-bold underline text-3xl">👟ShoeHouse</h1>
        <div className="flex cursor-pointer justify-around p-2 w-64 mr-32 rounded-full border bg-red-800" onClick={()=>setShowCart(true)}>
            <span><FontAwesomeIcon icon={faShoppingCart}/></span>
            <span className='font-bold'>Your Cart</span>
            <span className='relative right-8 rounded-xl border px-2'>{Cart_Count}</span>
        
        </div>
        {/* <Cart/> */}
        <Cartz/>
    </nav>



}

export default Header;