import { useState } from 'react';
import { useFinancas } from '../context/FinancasContext';

const FinancasTabela = () => {
    const {financas, updateFinancas, deletarFinancas} = useFinancas();
    const [editarID, setEditarID] = useState(null);
    const [editarForm, setEditarForm] = useState({});

    const handleEditar = (financa) => {
        setEditarID(financa.id);
        setEditarForm(financa);
    };

    const handleSalvar = (id) => {
        updateFinancas(id, editarForm);
        setEditarID(null);
    }


    return (
        <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Finanças</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Nome</th>
              <th className="p-2 border">Data</th>
              <th className="p-2 border">Categoria</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Valor</th>
              <th className="p-2 border">Ações</th>
            </tr>
          </thead>
          <tbody>
            {financas.map((financa) => (
              <tr key={financa.id} className="border">
                <td className="p-2 border">
                  {editarID === financa.id ? (
                    <input
                      type="text"
                      value={editarForm.nome}
                      onChange={(e) => setEditarForm({ ...editarForm, name: e.target.value })}
                      className="w-full p-1 border rounded"
                    />
                  ) : (
                    financa.nome
                  )}
                </td>
                <td className="p-2 border">
                  {editarID === financa.id ? (
                    <input
                      type="date"
                      value={editarForm.date}
                      onChange={(e) => setEditarForm({ ...editarForm, date: e.target.value })}
                      className="w-full p-1 border rounded"
                    />
                  ) : (
                    financa.data
                  )}
                </td>
                <td className="p-2 border">
                  {editarID === financa.id ? (
                    <select
                      value={editarForm.categoria}
                      onChange={(e) => setEditarForm({ ...editarForm, categoria: e.target.value })}
                      className="w-full p-1 border rounded"
                    >
                      <option value="alimentacao">Alimentação</option>
                      <option value="transporte">Transporte</option>
                      <option value="lazer">Lazer</option>
                      <option value="outros">Outros</option>
                    </select>
                  ) : (
                    financa.categoria
                  )}
                </td>
                <td className="p-2 border">
                  {editarID === financa.id ? (
                    <select
                      value={editarForm.status}
                      onChange={(e) => setEditarForm({ ...editarForm, status: e.target.value })}
                      className="w-full p-1 border rounded"
                    >
                      <option value="pago">Pago</option>
                      <option value="nao-pago">Não Pago</option>
                    </select>
                  ) : (
                    <span
                      className={`px-2 py-1 rounded ${
                        financa.status === 'pago' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {financa.status === 'pago' ? 'Pago' : 'Não Pago'}
                    </span>
                  )}
                </td>
                <td className="p-2 border">
                  {editarID === financa.id ? (
                    <input
                      type="number"
                      value={editarForm.valor}
                      onChange={(e) => setEditarForm({ ...editarForm, valor: e.target.value })}
                      className="w-full p-1 border rounded"
                    />
                  ) : (
                    financa.valor.toFixed(2)
                  )}
                </td>
                <td className="p-2 border">
                  {editarID === financa.id ? (
                    <button
                      onClick={() => handleSalvar(financa.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Salvar
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditar(financa)}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deletarFinancas(financa.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Excluir
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default FinancasTabela;