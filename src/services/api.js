import http from "../config/http";

export async function getMiniaturas() {
    const miniaturas = await http.get("/miniaturas");
    return miniaturas.data;
}

export async function deletarMiniatura(id) {
    try {
        await http.delete(`/miniaturas/${id}`)
    } catch {
        throw new Error("Erro inesperado.")
    }
}

