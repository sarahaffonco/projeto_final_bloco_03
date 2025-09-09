/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";
import { listaCategorias } from "../../../service/Service";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    try {
      const dados = await listaCategorias();
      setCategorias(dados);
    } catch (error: any) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        {categorias.length === 0 && (
          <span className="text-3xl text-center my-8">
            Nenhuma Categoria foi encontrada!
          </span>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
