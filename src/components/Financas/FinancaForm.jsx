import { useState } from 'react';
import PropTypes from 'prop-types';

const FinancaForm = ({adicionarFinanca}) => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [status, setStatus] = useState('Não Pago');
    const [data, setData] = useState('');
    const [valor, setValor] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const novaFinanca = {
            nome,
            categoria,
            status,
            data,
            valor: parseFloat(valor)
        };
        adicionarFinanca(novaFinanca);
        setNome('');
        setCategoria('');
        setStatus('Não Pago');
        setData('');
        setValor('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className='flex flex-col'>
                <input 
                type='text'
                placeholder='Nome da conta'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)]'
                required
                />

                <input 
                type='text'
                placeholder='Categoria da Conta'
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)]'
                required
                />

                <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)]'
                required
                >
                    <option value='Pago'>Pago</option>
                    <option value='Não Pago'>Não Pago</option>
                </select>

                <input 
                type='date'
                value={data}
                onChange={(e) => setData(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)]'
                required
                />

                <input 
                type='number'
                placeholder='Valor da conta'
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)]'
                required
                />
            </div>

            <button type="submit" className="p-4 bg-green-600 text-lg m-4 rounded-lg font-bold">
                Adicionar Finança
            </button>
        </form>
    );
};

FinancaForm.propTypes = {
    adicionarFinanca: PropTypes.func.isRequired, 
  };

export default FinancaForm;