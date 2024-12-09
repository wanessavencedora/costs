import NavBar from "./components/layout/NavBar/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Projetos from "./components/pages/Projetos/Projetos";
import Contatos from "./components/pages/Contatos/Contatos";
import Empresa from "./components/pages/Empresa/Empresa";
import Footer from "./components/layout/Footer/Footer";



function App() {

  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="/empresa" element={<Empresa />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
