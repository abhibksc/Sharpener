



const SellerForm = () => {

    return <form className="SellerForm bg-blue-300  text-white shadow-2lg">

        <h1 className="text-center text-2xl font-bold">Seller</h1>

        <div className="rounded-lg flex flex-row flex-wrap p-5 justify-around ">
            <div className="size-36 flex flex-col gap-3">
                <label>Shoe Name : </label>
                <input type="text" className="px-2 rounded-md shadow-lg" />
            </div>

            <div className="size-36 flex flex-col gap-3 ">
                <label>Description : </label>
                <input type="text" className="px-2 rounded-md  shadow-lg"/>
            </div>

            <div className="size-36 flex flex-col gap-3">
                <label>Price</label>
                <input type="number" className="px-2 rounded-md shadow-lg"/>
            </div>

            <div className="size-36 flex flex-col gap-3 text-center" >

                <h1 className="relative  left-7" >Quantity Available</h1>
                <div className="flex flex-row gap-3">
                    L<input type="number" className="w-10 rounded-md px-1 shadow-lg" />
                    M<input type="number" className="w-10 rounded-md px-1 shadow-lg" />
                    S<input type="number" className="w-10 rounded-md px-1 shadow-lg" />
                </div>
                
            </div>

            <button className=" relative left-6 w-96 max-w-16 h-16 rounded-lg my-4 text-black bg-blue-200 hover:bg-red-800 hover:text-white shadow-lg">Add</button>

        </div>
    </form>
}

export default SellerForm;