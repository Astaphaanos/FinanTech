import { useContext } from 'react';
import { FinancasContext } from '../context/FinancasContext';

export const useFinancas = () => {
  return useContext(FinancasContext);
};