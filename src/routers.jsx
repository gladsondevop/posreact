import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Initial from "./pages";
import Detalhes from "./pages/detalhes";
import Cadastro from "./pages/cadastro";

const Routers = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  };
  
  export default Routers;
