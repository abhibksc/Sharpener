import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import  Store from "./src/Components/Store/Store"
import AboutUs from "./src/Components/About/AboutUs";
import ErrorComponent from "./src/Components/ErrorComponent/ErrorComponent";
import Body from "./src/Components/Home/Body";


const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [

            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/store",
                element : <Store/>
            },
            {
                path : "/about",
                element : <AboutUs/>
            }
        ],
        errorElement : <ErrorComponent/>
    },
    
])

export default AppRouter;