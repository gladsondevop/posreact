import http from "../config/http";

export async function getMiniatura(id) {
    try {
        return await http.get(`/miniaturas/${id}`);
    } catch {
        throw new Error("Erro inesperado ao recuperar miniatura.");
    }
}

export async function getMiniaturas() {
    const miniaturas = await http.get("/miniaturas");
    return miniaturas.data;
}

export async function cadastrarMiniatura(form) {
    try {
        await http.post(`/miniaturas`, form);
    } catch {
        throw new Error("Erro inesperado ao cadastrar.");
    }
}

export async function editarMiniatura(form) {
    try {
        await http.patch(`/miniaturas/${form.id}`, form);
    } catch {
        throw new Error("Erro inesperado ao editar.");
    }
}

export async function deletarMiniatura(id) {
    try {
        await http.delete(`/miniaturas/${id}`);
    } catch {
        throw new Error("Erro inesperado ao excluir.");
    }
}

