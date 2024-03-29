//import ''
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Paginas/Inicio";
import SobreMim from "./components/Paginas/SobreMim";
import Menu from "./components/Menu/Index";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "components/Post";
import NotFound from "components/Paginas/NotFound";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao/>}>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/sobremim" element={<SobreMim/>}/>
          </Route>
          <Route path="posts/:id" element={<Post/>}></Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Rodape/>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;
