import "../assets/styleGlobal.css";
import Table from "../components/table";
import { useEffect, useState } from "react";
import { deletarMiniatura, getMiniaturas } from "../services/api";
import Form from "../components/form";



function Initial() {
  
  const [miniaturas, setMiniaturas] = useState([]);
  const [showList, setShowList] = useState(true);
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);

  // const cadastro = (value) => {
  //   setShowList(value);
  //   setUpdate(false);
  // }

  const editMiniatura = (value) => {
    setForm(value);
    setShowList(!setShowList);
    setUpdate(true);
  };

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
  }, [showList]);

  return (
    <>
        {showList ? <Table miniaturas={miniaturas} delMiniatura={delMiniatura} editMiniatura={editMiniatura} /> : <Form act={setShowList} form={form} setForm={setForm} update={update} />}
    </>
  )
}

export default Initial;
