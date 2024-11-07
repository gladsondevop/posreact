import { useEffect } from "react";
import Form from "../components/form";
import { useDispatch } from "react-redux";
import { setMiniatura } from "../store/slices/miniatura/reducer";

function Cadastro() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMiniatura())
    }, [dispatch]);

    return (
        <Form />
    );

}

export default Cadastro;