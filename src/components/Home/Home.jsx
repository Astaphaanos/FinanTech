import { FaPlus } from 'react-icons/fa';

const Home = () => {
    return (
        <section className='bg-[var(--cor-bg-header)] text-[var(--cor-text-header)]'>
            <div>
                <div className='flex items-center justify-around p-10'>
                    <h1 className='text-3xl font-bold'>Seja bem-vindo(a), Anna!</h1>

                    <button type="button" className='flex items-center bg-green-500 p-2 rounded-lg text-white cursor-pointer'>
                        <FaPlus className='mr-1' color='white'/>
                        Criar
                    </button>
                </div>

                {/*Dashboard */}
                <div>

                </div>
            </div>
        </section>
    );
}

export default Home;