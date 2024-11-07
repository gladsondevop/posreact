import Form from "../components/form";
import Erro from "../components/erro";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMini } from "../store/slices/miniatura/action";
import { useSelector } from "react-redux";

function Detalhes() {
    
    let {id} = useParams();
    const dispatch = useDispatch();
    const {miniatura: mini} = useSelector((state) => state.miniatura);

    useEffect(() => {
        dispatch(getMini(id))
    }, [dispatch, id]);

    if(!mini) {
        return <Erro />
    } else {
        return <Form isEdit />
    }

    
}
export default Detalhes;