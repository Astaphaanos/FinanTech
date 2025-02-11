import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
    return (
        <header className="bg-[var(--cor-bg-header)] text-[var(--cor-text-header)] p-8">
            <nav className="flex items-center justify-between">
                
                <div className="flex items-center">
                    <img src="/images/logo.png" alt="FinanTech Logo" className="w-56 mr-8"/>
                    <ul className="flex cursor-pointer">
                        <li className="mr-8">
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className="mr-8">
                            <Link to="/resumo-financeiro">Resumo Financeiro</Link>
                        </li>
                        <li>
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