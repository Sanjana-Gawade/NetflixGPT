import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";



function Body(){
 

const appRounter = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    }
])


    return(
        <div>
            <RouterProvider router={appRounter}/>
        </div>
    )
}


export default Body;
