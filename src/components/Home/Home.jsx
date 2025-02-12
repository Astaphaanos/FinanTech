import { useState } from "react";
import { FinancasProvider } from "../../context/FinancasContext";
import FinancasForm from '../Financas/FinancasForm';
import FinancasTabela from '../Financas/FinancasTabela';

import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <FinancasProvider>
      <section className="bg-[var(--cor-bg-header)] text-[var(--cor-text-header)]">
        <div className="flex items-center justify-around p-10">
          <h1 className="text-3xl font-bold">Seja bem-vindo(a), Anna!</h1>

          <button
            onClick={() => setMostrarForm(true)}
            type="button"
            className="flex items-center bg-green-500 p-2 rounded-lg text-white cursor-pointer"
          >
            <FaPlus className="mr-1" color="white" />
            Criar
          </button>
          {mostrarForm && (<FinancasForm onFechar={() => setMostrarForm(false)} />)}
          <FinancasTabela />
        </div>
      </section>
    </FinancasProvider>
  );
};

export default Home;
