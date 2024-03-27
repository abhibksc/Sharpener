

const Cart = ()=>{
    return <div className="flex flex-col">
        <div>
            Sushi
        </div>
        <div className="flex justify-between">
            <h1>Total Amount</h1>
            <h2>{42}</h2>
        </div>      
        <div className="flex justify-end">
            <button>Close</button>
            <button>Order</button>
        </div>
    </div>
}