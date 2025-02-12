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
      <section className="">
        <div className='bg-[var(--cor-bg-header)] text-[var(--cor-text-header)] pb-10'>
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
          <div className='flex items-center justify-around mt-14'>
            <div className='bg-white rounded-lg pl-18 pr-18 pt-12 pb-12'>
              <h3 className='text-[var(--cor-text-ganho)] font-bold text-3xl pb-4'>Total de Ganho:</h3>
              <p className='text-[var(--cor-text-ganho)] font-bold text-3xl'>R$ {totalFinanca}</p>
            </div>
            <div className='bg-white rounded-lg pl-18 pr-18 pt-12 pb-12'>
              <h3 className='text-[var(--cor-text-despesa)] font-bold text-3xl pb-4'>Total de Depesa:</h3>
              <p className='text-[var(--cor-text-despesa)] font-bold text-3xl'>R$ {totalDespesa}</p>
            </div>
          </div>

          {/*Modal */}
          {mostrarForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-neutral-100 p-6 rounded-lg shadow-lg w-full max-w-md">
                <button
                onClick={() => setMostrarForm(false)}
                  className='text-black cursor-pointer ml-4'
                  >
                  X
                </button>
                <FinancaForm adicionarFinanca={adicionarFinanca}/>
              </div>
            </div>
          )}
        </div>
        <FinancaTabela financas={financas} deletarFinanca={deletarFinanca}/>
      </section>
  );
};

export default Home;
