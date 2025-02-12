import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const FinancasContext = createContext();

export const FinancasProvider = ({ children }) => {
  const [financas, setFinancas] = useState([]);

  const adicionarFinancas = (novaFinancas) => {
    setFinancas([...financas, { ...novaFinancas, id: Date.now() }]);
  };

  const updateFinancas = (id, updatedFinancas) => {
    setFinancas(financas.map((financa) =>
      financa.id === id ? { ...financa, ...updatedFinancas } : financa
    ));
  };

  const deletarFinancas = (id) => {
    setFinancas(financas.filter((financa) => financa.id !== id));
  };

  return (
    <FinancasContext.Provider value={{ financas, adicionarFinancas, updateFinancas, deletarFinancas }}>
      {children}
    </FinancasContext.Provider>
  );
};

FinancasProvider.propTypes = {
  children: PropTypes.func.isRequired, // onRestart deve ser uma função e é obrigatória
};