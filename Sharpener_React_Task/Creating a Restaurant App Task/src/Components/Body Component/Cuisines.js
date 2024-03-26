
import { useContext, useState } from "react";
import { useContext, useState } from "react";
import { Context } from "../Context";


const Cuisines = () => {

    const { arr } = useContext(Context);
    console.log(arr);
    return <div className="bg-gray-700 relative top-28  ">
        <ul className="flex flex-col rounded-md shadow-lg bg-white justify-center w-screen max-w-3xl p-5  gap-8  mx-auto ">
            {
                arr.map((items,index) => (
                    <li key={index} className="flex flex-col gap-1 ">
                        
                            <h1 className="font-bold">{items.item}</h1>
                            <p>{items.description}</p>
                            <p className=" text-amber-800 font-bold">{items.price}</p><hr/>
                        
                    </li>
                ))
            }
        </ul>
    </div>
}

export default Cuisines;