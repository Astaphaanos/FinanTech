import { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type='text'
                placeholder='Nome da conta'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className=''
                required
                />

                <input 
                type='text'
                placeholder='Categoria da Conta'
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className=''
                required
                />

                <input 
                type='text'
                placeholder='Nome da conta'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className=''
                required
                />

                <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className=''
                required
                >
                    <option value='Pago'>Pago</option>
                    <option value='Não Pago'>Não Pago</option>
                </select>

                <input 
                type='date'
                value={data}
                onChange={(e) => setData(e.target.value)}
                className=''
                required
                />

                <input 
                type='number'
                placeholder='Valor da conta'
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className=''
                required
                />
            </div>

            <button type="submit" className="">
                Adicionar Finança
            </button>
        </form>
    );
};

export default FinancaForm