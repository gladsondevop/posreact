import "./assets/styleGlobal.css";
import Layout from "./components/layout";
import Table from "./components/table";
import { useEffect, useState } from "react";
import { deletarMiniatura, getMiniaturas } from "./services/api";



function App() {
  
  const [miniaturas, setMiniaturas] = useState([]);

  const delMiniatura = async (id) => {
    try {
        await deletarMiniatura(id);
        getMinis();
    } catch {
        alert("Algo errado não está certo.");
    }

  };

  const getMinis = async () => {
    const data = await getMiniaturas();
    setMiniaturas(data);
  }

  useEffect(() => {
    (async () => {
      getMinis();
    })();
  }, []);

  return (
    <Layout>
        <Table miniaturas={miniaturas} delMiniatura={delMiniatura}></Table>
    </Layout>
  )
}

export default App;
