/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import {
  atualizarCategoria,
  buscarCategoriaPorId,
  cadastrarCategoria,
} from "../../../service/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      const categoriaData = await buscarCategoriaPorId(Number(id));
      setCategoria(categoriaData);
    } catch (error: any) {
      console.error("Erro ao buscar categoria:", error);
      alert("Erro ao buscar categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizarCategoria(Number(id), categoria);
        alert("A Categoria foi atualizada com sucesso!");
      } else {
        await cadastrarCategoria (categoria);
        alert("A Categoria foi cadastrada com sucesso!");
      }

    } catch (error: any) {
      console.error("Erro ao salvar categoria:", error);
      alert("Erro ao salvar a categoria.");
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome da categoria"
            name="nome"
            className="border-2 border-emerald-950 rounded p-2"
            value={categoria.nome || ""}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui a categoria"
            name="descricao"
            className="border-2 border-emerald-950 rounded p-2"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-emerald-700
                               hover:bg-emerald-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
