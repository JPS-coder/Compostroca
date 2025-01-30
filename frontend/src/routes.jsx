import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import PageBase from "./Pages/PageBase";
import StationData from "./Pages/StationData";
<<<<<<< HEAD
=======

>>>>>>> 6e889b6877fc8975a36929568fbac7f7ba4f4e35

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> } >
                    <Route index element={ <Home /> } />
<<<<<<< HEAD
                    <Route path="/stationData" element={ <StationData/> } />
=======
                    <Route path="stationData" element={ <StationData/>} />
>>>>>>> 6e889b6877fc8975a36929568fbac7f7ba4f4e35
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes