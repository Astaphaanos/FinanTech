import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
    return (
        <header className="bg-[var(--cor-bg-header)] text-[var(--cor-text-header)] p-8">
            <nav className="flex items-center justify-between">
                <div>
                    {/*Imagem do site*/}


                    <ul className="flex cursor-pointer">
                        <li className="mr-6">
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/resumo-financeiro">Resumo Financeiro</Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/planos-financeiros">Planos Financeiros</Link>
                        </li>
                    </ul>
                </div>

                <div className="relative flex items-center">
                    <div className="flex items-center">
                        <FaSearch className="absolute left-3"/>
                        <input 
                            type="search" 
                            className="bg-[var(--cor-input)] rounded-lg pl-10 pr-4 py-2 mr-10 focus:outline-none 
                            focus:ring-2 focus:ring-[var(--cor-text-header)]"
                            placeholder="O que você procura?"
                        />
                    </div>

                    <div>
                        <FaUser className="cursor-pointer"/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;