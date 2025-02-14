import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import PageBase from "./Pages/PageBase";
import Login from "./Pages/LoginRegister/login";
import Register from "./Pages/LoginRegister/register"
import RegisterNewUser from "./Pages/LoginRegister/registerNewUser";
import Edit from "./Pages/LoginRegister/edit";
import StationData from "./Pages/StationData";
import Info from "./Pages/Info";
import OrganiciDelivery from "./Pages/OrganicDelivery";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> } >
                    <Route index element={ <Home /> } />
                    <Route path="/login" element={ <Login/> } />
                    <Route path="/register" element={ <Register/> } />
                    <Route path="/registerNewUser" element={ <RegisterNewUser/> } />
                    <Route path="/edit" element={ <Edit/> } />
                    <Route path="/stationData" element={ <StationData/> } />
                    <Route path="/info" element={ <Info/> } />
                    <Route path="/organicDelivery" element={ <OrganiciDelivery/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes