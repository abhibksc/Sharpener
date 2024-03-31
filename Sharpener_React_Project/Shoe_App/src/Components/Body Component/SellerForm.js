import { useContext } from "react";
import { Context } from "../ContextAPI.js/Context";
import { useHandleEdgeCases } from "../Hooks/useHandleEdgeCases";




const SellerForm = () => {

    const { arr, setArr } = useContext(Context);


    const handleForm = (e) => {
        e.preventDefault();

        if (e.target[0].value === '' || e.target[1].value === '' || e.target[2].value === '') {
            alert("Please fill in all required fields.")
            return;
        }
    
        if (e.target[3].value === '') {
            e.target[3].value = 0;
        }
        if (e.target[4].value === '') {
            e.target[4].value = 0;
        }
        if (e.target[5].value === '') {
            e.target[5].value = 0
        }

       

        console.log(e.target[3].value);

        let obj = {
            shoeName: e.target[0].value,
            description: e.target[1].value,
            price: e.target[2].value,
            quantityAvailable: {
                L: e.target[3].value,
                M: e.target[4].value,
                S: e.target[5].value,
            },
            id : null,
            size : null            
        };

        setArr([...arr, obj]);
        
    }

   



    return <form className="SellerForm bg-blue-300  text-white shadow-2lg" onSubmit={(e) => handleForm(e)}>

        <h1 className="text-center text-2xl font-bold">Seller</h1>

        <div className="rounded-lg flex flex-row flex-wrap p-5 justify-around ">

            <div className="size-36 flex flex-col gap-3">
                <label>Shoe Name : </label>
                <input type="text" className="px-2 rounded-md shadow-lg text-black" />
            </div>

            <div className="size-36 flex flex-col gap-3 ">
                <label>Description : </label>
                <input type="text" className="px-2 rounded-md  shadow-lg text-black" />
            </div>

            <div className="size-36 flex flex-col gap-3">
                <label>Price</label>
                <input type="number" className="px-2 rounded-md shadow-lg text-black" />
            </div>

            <div className="size-36 flex flex-col gap-3 text-center" >

                <h1 className="relative  left-7" >Quantity Available</h1>
                <div className="flex flex-row gap-3">
                    L<input type="number" className="w-10 rounded-md px-1 shadow-lg text-black" />
                    M<input type="number" className="w-10 rounded-md px-1 shadow-lg text-black" />
                    S<input type="number" className="w-10 rounded-md px-1 shadow-lg text-black" />
                </div>

            </div>

            <button className=" Seller_Quantity_btn ">Add</button>

        </div>
    </form>
}

export default SellerForm;