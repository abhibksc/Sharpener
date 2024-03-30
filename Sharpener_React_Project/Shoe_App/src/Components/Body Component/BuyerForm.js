



const BuyerForm = () => {

    return <div className="SellerForm bg-blue-300 text-white  ">

        <h1 className="text-center text-2xl font-bold">Buy Now</h1>

        <div className="rounded-lg flex flex-row flex-wrap p-5 gap-20">

            <span className="size-36 flex flex-col gap-3">
               <p>{"ShoeName"}</p>
            </span>

            <span className="size-36 flex flex-col gap-3">
                <p>{"ShoeName Description"}</p>
            </span>

            <span className="size-36 flex flex-col gap-3">
                <p>{"ShoeName Price"}</p>
            </span>

            <span className="size-42 flex flex-wrap gap-3 text-center" >

               <button className="border h-20 p-2 w-24 bg text-black bg-blue-200 hover:bg-red-800 hover:text-white rounded-lg shadow-lg">Buy Large {98}</button>
               <button className="border h-20 p-2 w-25 bg text-black bg-blue-200 hover:bg-red-800 hover:text-white rounded-lg shadow-lg">Buy Medium {19}</button>
               <button className="border h-20 p-2 w-24 bg text-black bg-blue-200 hover:bg-red-800 hover:text-white rounded-lg shadow-lg">Buy Small {29}</button>

                
            </span>

            
        </div>
    </div>
}

export default BuyerForm;