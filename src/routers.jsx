import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Initial from "./pages";
import Detalhes from "./pages/detalhes";
import Cadastro from "./pages/cadastro";
import { Provider } from "react-redux";
import { store } from "./store";

const Routers = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Initial />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/detalhes/:id" element={<Detalhes />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  };
  
  export default Routers;
