
import Cuisines from "./Cuisines";


const Body = () => {



    
    return <body className="h-full">

        <img className="w-screen max-w-full" src="https://www.claridges.co.uk/siteassets/restaurants--bars/artspace-cafe/artspace-cafe-hero-food-1920_720.jpg" alt="img" />
        <div className="absolute bottom-20  left-96 font-serif  text-white bg-gray-800 p-2 flex flex-col gap-5 shadow-2xl rounded-md  w-full max-w-xl mx-auto text-center">
            <h1 className=" font-extrabold text-2xl text-yellow-300">Delicious Food, Delivered To You</h1>
            <div className="flex flex-col  font-sans gap-3">
                <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredient, just-in-time and of course by experienced cheifs!</p>
            </div>
        </div>
        <Cuisines/>
        
    </body>
}

export default Body;