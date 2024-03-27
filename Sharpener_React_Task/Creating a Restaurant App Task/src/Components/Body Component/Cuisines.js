
import { useContext,  } from "react";
import { Context } from "../Context";


const Cuisines = () => {

    const { arr } = useContext(Context);
    console.log(arr);
    return <div className="bg-gray-700 relative top-28  ">
        <ul className="flex flex-col rounded-md shadow-lg bg-white justify-center w-screen max-w-3xl p-5  gap-8  mx-auto ">
            {
                arr.map((items,index) => (
                    <li key={index} className="flex flex-row justify-between border-b pb-2 ">
                        
                            <div className="flex flex-col gap-1 ">
                            <h1 className="font-bold">{items.item}</h1>
                            <p>{items.description}</p>
                            <p className=" text-amber-800 font-bold">{items.price}</p>
                            </div>

                            <div className="flex flex-col gap-2 ">
                                <span className="flex flex-row gap-1  ">Amount <input className="w-12 text-center rounded-lg  border" type="number" value={3}/></span>
                                <button className="rounded-full border w-24 p-1 mx-auto bg-amber-800 hover:bg-amber-900">+Add</button>
                            </div>
                        
                    </li>
                ))
            }
        </ul>
    </div>
}

export default Cuisines;