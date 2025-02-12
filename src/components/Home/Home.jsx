import { useState } from 'react';
import FinancaForm from '../Financas/FinancaForm';
import FinancaTabela from '../Financas/FinancaTabela';
import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [financas, setFinancas] = useState([]);
  const [totalFinanca] = useState(0);
  const [totalDespesa, setTotalDespesa] = useState(0);
  const [mostrarForm, setMostrarForm] = useState(false);

  const adicionarFinanca = (financa) => {
    setFinancas([...financas, financa]);
    if(financa.status === 'Pago') {
      setTotalDespesa(totalDespesa + parseFloat(financa.valor))
    }
    setMostrarForm(false)
  }

  const deletarFinanca = (index) => {
    const deletarFinanca = financas[index];
    if(deletarFinanca.status === 'Pago') {
      setTotalDespesa(totalDespesa + parseFloat(financas.valor));
    }
    setFinancas(financas.filter((_, i) => i !== index))
  }

  return (
      <section className="bg-[var(--cor-bg-header)] text-[var(--cor-text-header)]">
        <div className="flex items-center justify-around p-10">
          <h1 className="text-3xl font-bold">Seja bem-vindo(a), Anna!</h1>

          <button
            type="button"
            className="flex items-center bg-green-500 p-2 rounded-lg text-white cursor-pointer"
            onClick={() => setMostrarForm(!mostrarForm)}
          >
            <FaPlus className="mr-1" color="white" />
            Criar
          </button>
        </div>

        <div className=''>
          <p>Total de Ganho: R$ {totalFinanca}</p>
          <p>Total de Gasto: R$ {totalDespesa}</p>
        </div>

        {/*Modal */}
        {mostrarForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <button 
              onClick={() => setMostrarForm(false)}
                className=''
                >
                X
              </button>
              <FinancaForm adicionarFinanca={adicionarFinanca}/>
            </div>
          </div>
        )}
        <FinancaTabela financas={financas} deletarFinanca={deletarFinanca} />
      </section>
  );
};

export default Home;
