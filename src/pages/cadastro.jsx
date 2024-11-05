import { useState } from "react";
import Form from "../components/form";
import { cadastrarMiniatura } from "../services/api";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();

    const [form, setForm] = useState({});

    const setFormValues = (field, value) => 
        setForm({...form, [field] : value});

    const adicionarMiniatura = async () => {
        try {
            await cadastrarMiniatura(form);
            alert("Miniatura atuaizada com sucesso!");
            setForm({})
            navigate('/')
        } catch {
            throw new Error("Erro inesperado ao cadastrar.");
        }
    }

    return (
        <Form miniatura={form} setFormValues={setFormValues} submit={adicionarMiniatura} />
    );

}

export default Cadastro;