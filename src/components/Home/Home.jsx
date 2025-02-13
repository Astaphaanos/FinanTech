import { useState } from "react";
import FinancaForm from "../Financas/FinancaForm";
import FinancaTabela from "../Financas/FinancaTabela";
import { FaPlus} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Home = () => {
  const [financas, setFinancas] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [financaEditando, setFinancaEditando] = useState(null);
  const [indiceEditando, setIndiceEditando] = useState(null);
  const [totalGanho, setTotalGanho] = useState(0);
  const [totalDespesa, setTotalDespesa] = useState(0);
  const [showTotalModal, setShowTotalModal] = useState(false);

  const adicionarFinanca = (financa, indice) => {
    if (indice !== null && indice !== undefined) {
      // Se estiver editando, atualize a finança existente
      const novasFinancas = [...financas];
      const financaAntiga = novasFinancas[indice];
      novasFinancas[indice] = financa;

      // Atualiza o total de despesa se o status mudar
      if (financaAntiga.status === 'Pago' && financa.status !== 'Pago') {
        setTotalDespesa(totalDespesa - parseFloat(financaAntiga.valor));
      } else if (financaAntiga.status !== 'Pago' && financa.status === 'Pago') {
        setTotalDespesa(totalDespesa + parseFloat(financa.valor));
      }

      setFinancas(novasFinancas);
    } else {
      // Se não estiver editando, adicione uma nova finança
      setFinancas([...financas, financa]);

      // Se a finança for "Pago", adicione ao total de despesa
      if (financa.status === 'Pago') {
        setTotalDespesa(totalDespesa + parseFloat(financa.valor));
      }
    }
    setMostrarForm(false); // Fecha o modal após adicionar/editar
  };

  const deletarFinanca = (index) => {
    const financiaExcluida = financas[index];
    // Se a finança excluída for "Pago", subtraia do total de despesa
    if (financiaExcluida.status === 'Pago') {
      setTotalDespesa(totalDespesa - parseFloat(financiaExcluida.valor));
    }
    setFinancas(financas.filter((_, i) => i !== index));
  };

  // Função para editar uma finança
  const editarFinanca = (index) => {
    setFinancaEditando(financas[index]); // Carrega os dados da finança selecionada
    setIndiceEditando(index); // Armazena o índice da finança sendo editada
    setMostrarForm(true); // Abre o modal
  };

  return (
    <section className="">
      {/*Titulo e botões */}
      <div className="bg-[var(--cor-bg-header)] text-[var(--cor-text-header)] pb-10">
        <div className="flex items-center justify-between p-10 border-b-1">
          <h1 className="text-3xl font-bold ml-10">Seja bem-vindo(a), Anna!</h1>

          <div className="flex">
          <button
              type="button"
              className="flex items-center bg-stone-500 p-2 rounded-lg mr-10 text-white cursor-pointer"
              onClick={() => setShowTotalModal(true)}>
              <FaPlus className="mr-2" color="white" />
              Ganho e Despesa
            </button>

            <button
              type="button"
              className="flex items-center bg-green-500 p-2 rounded-lg mr-8 text-white cursor-pointer"
              onClick={() => {
                if (totalGanho > 0) {
                  setMostrarForm(true);
                } else {
                  alert('Defina o valor de ganho antes de criar uma finança.');
                }
              }}
              disabled={totalGanho <= 0}>
              <FaPlus className="mr-2" color="white" />
              Criar
            </button>
          </div>
        </div>

        {/*Total de Ganho e Despesa exibido do dashboard*/}
        <div className="flex items-center justify-around mt-14">
          <div className="bg-white rounded-lg pl-18 pr-18 pt-12 pb-12">
            <h3 className="text-[var(--cor-text-ganho)] font-bold text-3xl pb-4">
              Total de Ganho:
            </h3>
            <p className="text-[var(--cor-text-ganho)] font-bold text-3xl">
              R$ {totalGanho.toFixed(2)}
            </p>
          </div>

          <div className="bg-white rounded-lg pl-18 pr-18 pt-12 pb-12">
            <h3 className="text-[var(--cor-text-despesa)] font-bold text-3xl pb-4">
              Total de Depesa:
            </h3>
            <p className="text-[var(--cor-text-despesa)] font-bold text-3xl">
              R$ {totalDespesa.toFixed(2)}
            </p>
          </div>
        </div>

        {/*Modal do formulário*/}
        {mostrarForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-neutral-100 p-6 rounded-lg shadow-lg w-full max-w-md relative">
              <button
                onClick={() => setMostrarForm(false)}
                className="text-black cursor-pointer absolute top-2 right-2 p-2"> 
                <IoMdClose fontSize={20}/> 
              </button>
              <h2 className="text-2xl font-bold mb-4 pl-4 pt-2 text-black">Sua Finança</h2>
              
              <FinancaForm
                adicionarFinanca={adicionarFinanca}
                financaEditando={financaEditando}
                setFinancaEditando={setFinancaEditando}
                indiceEditando={indiceEditando}
              />
            </div>
          </div>
        )}

        {/**Modal para colocar ganho e despesa */}
        {showTotalModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-black">
            <div className="bg-neutral-100 p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button 
            onClick={() => setShowTotalModal(false)} 
            className="text-black cursor-pointer text-md absolute top-2 right-2 p-2">
               <IoMdClose fontSize={20}/>
            </button>
              <h2 className="text-2xl font-bold mb-4 pl-2 pt-2">Definir Totais</h2>

              <div className="space-y-4 ">
                <div>
                  <label className="block text-xl font-medium p-2">
                    Total de Ganho
                  </label>
                  <input
                    type="number"
                    value={totalGanho}
                    onChange={(e) => setTotalGanho(parseFloat(e.target.value))}
                    className=" p-2 text-xl text-black m-4 focus:outline-none 
                    focus:ring-2 focus:ring-[var(--cor-text-header)] bg-[var(--cor-bg-input)] rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={() => setShowTotalModal(false)}
                  className="bg-green-500 text-white p-2 pl-4 pr-4 rounded-lg cursor-pointer font-bold text-md">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <FinancaTabela
        financas={financas}
        deletarFinanca={deletarFinanca}
        editarFinanca={editarFinanca}
      />
    </section>
  );
};

export default Home;
