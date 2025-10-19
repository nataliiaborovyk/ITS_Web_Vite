import Home from "./Home"
import Profiles from "./Profiles"
import About from "./About"
import Myprofile from "./Myprofile"
import SingleProfile from "./SingleProfile"
import ErrorPage from "./ErrorPage"

export const routes=[
    {
        path:"/",
        element:<Home/>
    },
        {
        path:"/about",
        element:<About/>
    },
        {
        path:"/profiles",
        element:<Profiles/>,
        children:[
            {
                path:"me",
                element:<Myprofile/>
            },
                        {
                path:":id",
                element:<SingleProfile/>
            }
        ]
    },
        {
        path:"*",
        element:<ErrorPage/>
    }
]