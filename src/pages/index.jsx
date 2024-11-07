import Table from "../components/table";
import { useEffect, useState } from "react";
import { deletarMiniatura } from "../services/api";
import Form from "../components/form";
import { useDispatch } from "react-redux";
import { getAllMiniaturas } from "../store/slices/miniatura/action";

function Initial() {
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(true);

  const delMiniatura = async (id) => {
    try {
        await deletarMiniatura(id);
        dispatch(getAllMiniaturas());
    } catch {
        alert("Algo errado não está certo.");
    }

  };

  useEffect(() => {
    dispatch(getAllMiniaturas());
  }, []);

  return (
    <>
        {showList ? <Table delMiniatura={delMiniatura} /> : <Form act={setShowList} />}
    </>
  )
}

export default Initial;
