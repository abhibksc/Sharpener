import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = ()=>{
    return <nav className=" fixed top-0 left-0 right-0  text-white p-4 flex justify-between items-center bg-red-500 shadow-2xl">
        <h1 className="ml-36 font-bold underline text-3xl">REACTMEAL</h1>
        <div className="flex justify-around p-2 w-64 mr-32 rounded-full border bg-red-800">
            <span><FontAwesomeIcon icon={faShoppingCart}/></span>
            <span className='font-bold'>Your Cart</span>
            <span className='relative right-8 rounded-xl border px-2'>{0}</span>
        
        </div>
    </nav>
}

export default Header;