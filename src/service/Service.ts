import axios from "axios";
import { toast } from "react-toastify";
import type Categoria from "../models/Categoria";

const service = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const cadastrarCategoria = async (categoria: Categoria) => {
    const resposta = await service.post("/categorias", categoria);
    toast.success("Categoria cadastrada com sucesso!");
    return resposta.data;
};

export const atualizarCategoria = async (id: number, categoria: Categoria) => {
    const resposta = await service.put(`/categorias/${id}`, categoria);
    toast.success("Categoria atualizada com sucesso!");
    return resposta.data;
}

export const deletarCategoria = async (id: number) => {
     await service.delete(`/categorias/${id}`, {
        data: {}
    });
    toast.success("Categoria deletada com sucesso!");
}

export const listaCategorias = async () => {
    const resposta = await service.get("/categorias");
    return resposta.data;
}

export const buscarCategoriaPorId = async (id: number) => {
    const resposta = await service.get(`/categorias/${id}`);
    return resposta.data;
}

export default service;
