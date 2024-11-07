import Swal from "sweetalert2";
import { cadastrarMiniatura, deletarMiniatura, editarMiniatura, getMiniatura, getMiniaturas } from "../../../services/api";
import { setMiniatura, setMiniaturas } from "./reducer";

export const getAllMiniaturas = () => async (dispatch) => {
    try {
        const result = await getMiniaturas();
        dispatch(setMiniaturas(result));
    } catch (error) {
        console.log("error", error);
    }
}

export const getMini = (id) => async (dispatch) => {
    try {
        const result = await getMiniatura(id);
        dispatch(setMiniatura(result.data));
    } catch (error) {
        console.log("error", error);
    }
}

export const saveMiniatura = (editForm=false) => async (dispatch, getState) => {
    try {
        const {miniatura} = getState().miniatura;
        const action = editForm ? editarMiniatura : cadastrarMiniatura;
        await action(miniatura);
        dispatch(getAllMiniaturas());

        Swal.fire({
            title: "Sucesso",
            text: `Miniatura ${editForm ? 'atualizada' : 'cadastrada'} com sucesso`,
            icon: 'success'
        });


        return Promise.resolve();
    } catch (error) {
        Swal.fire({
            title: "Ah, não!",
            text: `Erro inesperado ao salvar`,
            icon: 'error'
        });
        console.log("error", error);
    }
}

export const editForm = (field, value) => async (dispatch, getState) => {
    const {miniatura} = getState().miniatura;
    dispatch(setMiniatura({
        ...miniatura,
        [field]: value
    }));
}


export const deleteMiniatura = (id) => async (dispatch) => {
    try {

        Swal.fire({
            title: "Vai realmente excluir essa miniatura?",
            text: "Se liga! Se excluir já era...",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Melhor não.",
            confirmButtonText: "Sim, excluir."
          }).then( async (result) => {
            
            if (result.isConfirmed) {
                try {
                    await deletarMiniatura(id);
                    Swal.fire({
                        title: "Sucesso",
                        text: "Miniatura exluída.",
                        icon: "success"
                      });
                      dispatch(getAllMiniaturas());
                } catch (error) {
                    Swal.fire({
                        title: "Ah, não!",
                        text: `Erro inesperado ao deletar`,
                        icon: 'error'
                    });
                    console.log("error", error);   
                }
            }
          });

    } catch (error) {
        console.log("error", error);
    }
}