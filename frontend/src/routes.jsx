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
import Composting from "./Pages/Composting";
import GardenCare from "./Pages/GardenCare"
import Cooking from "./Pages/Cooking";
import CategoryPage from "./Pages/Cooking/categoryPage"
import PostPage from "./Pages/Cooking/postPage"

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
                    <Route path="/composting" element={ <Composting/> } />
                    <Route path="/gardenCare" element={ <GardenCare/> } />
                    <Route path="/cooking" element={ <Cooking/> } />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;