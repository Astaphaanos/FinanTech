import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from "react-icons/fa";

const FinancaTabela = ({ financas, deletarFinanca, editarFinanca }) => {
  return (
    <table  className="w-full bg-white border text-">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Nome</th>
          <th className="py-2 px-4 border">Categoria</th>
          <th className="py-2 px-4 border">Status</th>
          <th className="py-2 px-4 border">Data</th>
          <th className="py-2 px-4 border">Valor</th>
          <th className="py-2 px-4 border">Ações</th>
        </tr>
      </thead>

      <tbody>
        {financas.map((financa, index) => (
          <tr key={index} className='text-center font-medium'>
            <td className="py-2 px-4 border">{financa.nome}</td>
            <td className="py-2 px-4 border">{financa.categoria}</td>
            <td className="py-2 px-4 border">{financa.status}</td>
            <td className="py-2 px-4 border">{financa.data}</td>
            <td className="py-2 px-4 border">R$ {financa.valor.toFixed(2)}</td>
            <td className="py-2 px-4 border">
              <button
                onClick={() => deletarFinanca(index)}
                className="bg-red-500 text-white p-2 mr-2 rounded cursor-pointer">
                <FaTrash/>
              </button>

              <button
                onClick={() => editarFinanca(index)}
                className="bg-gray-700 text-white p-2 rounded cursor-pointer">
                <FaEdit/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

FinancaTabela.propTypes = {
  financas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired, 
  deletarFinanca: PropTypes.func.isRequired,
  editarFinanca: PropTypes.func.isRequired,
};

export default FinancaTabela;
