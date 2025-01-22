import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import PageBase from "./Pages/PageBase";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> } />
                    <Route index element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes