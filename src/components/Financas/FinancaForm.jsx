import { useState } from 'react';
import PropTypes from 'prop-types';

const FinancaForm = ({adicionarFinanca, financaEditando, setFinancaEditando, indiceEditando, setIndiceEditando}) => {
    const [nome, setNome] = useState(financaEditando ? financaEditando.nome : '');
    const [categoria, setCategoria] = useState(financaEditando ? financaEditando.categoria: '');
    const [status, setStatus] = useState(financaEditando ? financaEditando.status : 'Não Pago');
    const [data, setData] =  useState(financaEditando ? financaEditando.data : '');
    const [valor, setValor] = useState(financaEditando ? financaEditando.valor : '');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const novaFinanca = {
            nome,
            categoria,
            status,
            data,
            valor: parseFloat(valor)
        };
        if(financaEditando) {
            adicionarFinanca(novaFinanca, indiceEditando);
            setFinancaEditando(null);
            setIndiceEditando(null)
        } else {
            adicionarFinanca(novaFinanca);
        }

        // Limpar o form
        setNome('');
        setCategoria('');
        setStatus('Não pago');
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
                focus:ring-2 focus:ring-[var(--cor-text-header)] bg-[var(--cor-bg-input)] rounded-lg'
                required
                />

                <input 
                type='text'
                placeholder='Categoria da Conta'
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)] bg-[var(--cor-bg-input)] rounded-lg'
                required
                />

                <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)] bg-[var(--cor-bg-input)] rounded-lg'
                required
                >
                    <option value='Pago'>
                        Pago
                    </option>
                    <option value='Não Pago'>
                        Não Pago
                    </option>
                </select>

                <input 
                type='date'
                value={data}
                onChange={(e) => setData(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)] bg-[var(--cor-bg-input)] rounded-lg'
                required
                />

                <input 
                type='number'
                placeholder='Valor da conta'
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className='p-2 text-xl text-black m-4 focus:outline-none 
                focus:ring-2 focus:ring-[var(--cor-text-header)] bg-[var(--cor-bg-input)] rounded-lg'
                required
                />
            </div>

            <div className='mt-6 flex justify-end gap-4'>
                <button type="submit" className="bg-green-500 text-white p-4 rounded-lg cursor-pointer font-bold text-md">
                    Adicionar Finança
                </button>
            </div>
        </form>
    );
};

FinancaForm.propTypes = {
    adicionarFinanca: PropTypes.func.isRequired, 
    financaEditando: PropTypes.func.isRequired,
    setFinancaEditando: PropTypes.func.isRequired,
    indiceEditando: PropTypes.func.isRequired, 
    setIndiceEditando: PropTypes.func.isRequired,
  };

export default FinancaForm;