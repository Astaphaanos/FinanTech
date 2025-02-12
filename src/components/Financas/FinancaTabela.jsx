const FinancaTabela = ({ financas, deletarFinanca }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Status</th>
          <th>Data</th>
          <th>Valor</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {financas.map((financa, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border">{financa.nome}</td>
            <td className="py-2 px-4 border">{financa.categoria}</td>
            <td className="py-2 px-4 border">{financa.status}</td>
            <td className="py-2 px-4 border">{financa.data}</td>
            <td className="py-2 px-4 border">R$ {financa.valor.toFixed(2)}</td>
            <td className="py-2 px-4 border">
              <button
                onClick={() => deletarFinanca(index)}
                className="bg-red-500 text-white p-1 rounded">
                Apagar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FinancaTabela;
