import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editarMiniatura, getMiniatura } from "../services/api";
import Form from "../components/form";
import Erro from "../components/erro";

function Detalhes() {
    const navigate = useNavigate();
    let {id} = useParams();
    const [miniatura, setMiniatura] = useState(null);

    const setFormValues = (field, value) => 
        setMiniatura({...miniatura, [field] : value});

    const updateMiniatura = async () => {
        try {
            await editarMiniatura(miniatura);
            alert("Miniatura atuaizada com sucesso!");
            setMiniatura({})
            navigate('/')
        } catch {
            throw new Error("Erro inesperado ao editar miniatura.");
        }
    }

    useEffect(() => {
    (async () => {
        const miniatura = await getMiniatura(id);
        setMiniatura(miniatura.data);
    })();
    }, [id]);

    if(!miniatura) {
        return <Erro />
    } else {
        return <Form miniatura={miniatura} setFormValues={setFormValues} submit={updateMiniatura} />
    }

    
}
export default Detalhes;