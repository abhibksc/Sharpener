import Header from "./Components/Header Component/Header";
import Body from "./Components/Home/Body";
import Effects from "../Effects";
import { BrowserRouter, Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Components/ContextAPI.js/Context";




function App() {

  const {NavBelow ,setNavBelow}=useContext(Context);

  Effects();




  return (

    <div class=" flex flex-col h-full w-full  mx-auto  ">

      <div class="">
        <Header />
       

        <div className='md:hidden fixed z-20 top-16 left-24 px-3 py-1 bg-transparent rounded-md shadow-lg font-bold' style={{ color: '#ffffff' }} path="/">

          <ul className='flex gap-5   '>
            {/* sm:w-[300px] group-hover:w-[500px] transition-all rounded border  */}
            <li><Link to={"/"}> HOME</Link></li>
            <li><Link to={"/store"}> Store</Link></li>
            <li><Link to={"/about"}> About</Link></li>
          </ul>
        </div>



        <Outlet />
        <footer className="text-center bg-white  p-5 ">
          @copyright
        </footer>

      </div>


    </div>
  );
}



export default App;















