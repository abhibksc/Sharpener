import { useContext } from "react";
import { Context } from "../ContextAPI.js/Context";




const BuyerForm = () => {

    const { arr, setArr } = useContext(Context);

    const handleLarge = (e, obj) => {
        if (obj.quantityAvailable.L > 0) {
            obj.quantityAvailable.L = obj.quantityAvailable.L - 1;

            const object = {
                shoeName: obj.shoeName,
                description: obj.description,
                price: obj.price,
                quantityAvailable: {
                    L: obj.quantityAvailable.L,
                    M: obj.quantityAvailable.M,
                    S: obj.quantityAvailable.S,
                }
            }


            setArr([...arr], object)


        }




    }


    const handleMedium = (e, obj) => {




        if (obj.quantityAvailable.M > 0) {
            console.log(obj.quantityAvailable.M);
            obj.quantityAvailable.M = obj.quantityAvailable.M - 1;
            console.log(obj.quantityAvailable.M);

            const object = {
                shoeName: obj.shoeName,
                description: obj.description,
                price: obj.price,
                quantityAvailable: {
                    L: obj.quantityAvailable.L,
                    M: obj.quantityAvailable.M,
                    S: obj.quantityAvailable.S,
                }
            }


            setArr([...arr], object)


        }



















    }


    const handleSmall = (e, obj) => {
        if (obj.quantityAvailable.S > 0) {
            obj.quantityAvailable.S = obj.quantityAvailable.S - 1;

            const object = {
                shoeName: obj.shoeName,
                description: obj.description,
                price: obj.price,
                quantityAvailable: {
                    L: obj.quantityAvailable.L,
                    M: obj.quantityAvailable.M,
                    S: obj.quantityAvailable.S,
                }
            }


            setArr([...arr], object)


        }

    }
    console.log(arr);


    return <div className="SellerForm bg-blue-300 text-white  ">

        <h1 className="text-center text-2xl font-bold">Buy Now</h1>

        {

            <ul>
                {
                    arr.length === 0 ? <p className="text-center"> "Sorry, no products are available at the moment."</p> :
                        arr.map((ele, index) => {
                            ele.id = index;

                            return <li key={index} className="rounded-lg flex flex-row flex-wrap p-5 gap-20">

                                <span className="size-36 flex flex-col gap-3">
                                    <p>{ele.shoeName}</p>
                                </span>

                                <span className="size-36 flex flex-col gap-3">
                                    <p>{ele.description}</p>
                                </span>

                                <span className="size-36 flex flex-col gap-3">
                                    <p>{ele.price}</p>
                                </span>

                                <span className="size-42 flex flex-wrap gap-3 text-center" >

                                    <button className=" Buyer_Quantity_btn" onClick={(e) => handleLarge(e, ele)} > Large ({ele.quantityAvailable.L})</button>
                                    <button className=" Buyer_Quantity_btn" onClick={(e) => handleMedium(e, ele)} > Medium ({ele.quantityAvailable.M})</button>
                                    <button className=" Buyer_Quantity_btn" onClick={(e) => handleSmall(e, ele)} > Small ({ele.quantityAvailable.S})</button>


                                </span>


                            </li>
                        })
                }
            </ul>
        }
    </div>
}

export default BuyerForm;