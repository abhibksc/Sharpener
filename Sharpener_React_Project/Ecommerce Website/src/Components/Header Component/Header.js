import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../ContextAPI.js/Context';
import Cartz from '../Cartz/Cartz';
import Login from './Login';

const Header = () => {
    const { cartCount, setShowCart } = useContext(Context);

    return (
        <nav className=" nav">
            <span className="ml-6 lg:text-4xl">🎧 <span className=" font-bold underline">Generics</span></span>
            <div className='hidden md:block'>
            <ul className='flex gap-5  '>
            {/* sm:w-[300px] group-hover:w-[500px] transition-all rounded border  */}
                <li><a href="/">HOME</a></li>
                <li><a href="/">STORE</a></li>
                <li><a href="/">ABOUT</a></li>
            </ul>
            </div>
            <div className=' flex'>

                




               <div className='flex group hidden sm:block'>
               <button className="  flex cursor-pointer justify-around w-40 h-10 mr-20 mt-1 rounded-full  group-hover:bg-red-800   " onClick={() => setShowCart(true)}>
                    <span className='relative  top-2 left-3'><FontAwesomeIcon className='shadow-lg drop-shadow-sm' icon={faShoppingCart} /></span>
                    <span className='font-bold  group-hover:block hidden translate-all duration-100 p-2 w-40'>Your Cart <span className=' rounded-xl border px-2'>{cartCount}</span></span>
                </button>
               </div>

                <Cartz />
                <Login />
            </div>
        </nav>
    );
}

export default Header;
