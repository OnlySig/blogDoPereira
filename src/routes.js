//import ''
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Paginas/Inicio";
import SobreMim from "./components/Paginas/SobreMim";
import Menu from "./components/Menu/Index";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
          <Route path="*" element={<div>Página não encontrada!</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;
