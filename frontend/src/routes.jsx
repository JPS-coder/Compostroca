import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import PageBase from "./Pages/PageBase";
import StationData from "./Pages/StationData";


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> } >
                    <Route index element={ <Home /> } />
                    <Route path="stationData" element={ <StationData/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes