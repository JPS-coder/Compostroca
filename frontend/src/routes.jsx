import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu"
import PageBase from "./Pages/PageBase";
import Login from "./Pages/LoginRegister/login";
import Register from "./Pages/LoginRegister/register"
import StationData from "./Pages/StationData";
//import Home from "./Pages/Home";
import OrganiciDelivery from "./Pages/OrganicDelivery";
import RegisterNewUser from "./Pages/LoginRegister/registerNewUser";
import Edit from "./Pages/LoginRegister/edit"
import Composting from "./Pages/Composting";
import GardenCare from "./Pages/GardenCare"
import Cooking from "./Pages/Cooking";
import CategoryPage from "./Pages/Cooking/categoryPage"
import PostPage from "./Pages/Cooking/postPage"
import View from "./Pages/StationData/view";
import RecipeRegister from "./Pages/Cooking/recipeRegister";
import Articles from "./Pages/Cooking/articles";
import ConstPage from "./Pages/ConstPage";


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> } >
                    <Route index element={ <Menu /> } /> {/* antes era Home */}
                    <Route path="/admin" element={ <Login/> } />
                    <Route path="/cadastro" element={ <Register/> } />
                    <Route path="/cadastro-novo-usuario" element={ <RegisterNewUser/> } />
                    <Route path="/editar-dados" element={ <Edit/> } />
                    <Route path="/dados-estacao-cadastro" element={ <StationData/> } />
                    <Route path="/menu" element={ <Menu/> } />
                    <Route path="/entrega-residuos" element={ <OrganiciDelivery/> } />
                    <Route path="/compostagem" element={ <Composting/> } />
                    <Route path="/guia-da-horta" element={ <GardenCare/> } />
                    <Route path="/alimentacao-receitas" element={ <Cooking/> } />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/categoria/:categoryName" element={<CategoryPage />} />
                    <Route path="/dados-estacao/visualizar/:name" element={<View />} />
                    <Route path="/receita-cadastro" element={<RecipeRegister />} />
                    <Route path="/alimentacao-cadastro" element={<Articles />} />
                    <Route path="/pagina-construcao" element={<ConstPage />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;