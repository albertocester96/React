import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Auth from "../pages/Auth"

const AppRouter = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Auth/*" element={<Auth />} />
            </Routes> 
    )
}

export default AppRouter;