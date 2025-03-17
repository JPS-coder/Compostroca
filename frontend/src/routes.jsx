import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu"
import PageBase from "./Pages/PageBase";
import Login from "./Pages/LoginRegister/login";
import Register from "./Pages/LoginRegister/register"
import StationData from "./Pages/StationData";
import Home from "./Pages/Home";
import OrganiciDelivery from "./Pages/OrganicDelivery";
import RegisterNewUser from "./Pages/LoginRegister/registerNewUser";
import Edit from "./Pages/LoginRegister/edit"

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
                    <Route path="/menu" element={ <Menu/> } />
                    <Route path="/organicDelivery" element={ <OrganiciDelivery/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;