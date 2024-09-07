import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import QuestionPage from "../Pages/QuestionPage"
import HomePage from "../Pages/HomePage"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <div>404 NOT Found</div>
    
    },
    {
        path:"/question",
        element:<QuestionPage />,
    
    },

])