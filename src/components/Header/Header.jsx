import { Link } from "react-router";

const Header = () => {
    return (
        <header className="bg-[var(--cor-bg-header)] text-[var(--cor-text-header)] p-8">
            <nav className="flex items-center justify-around">
                
                <div className="flex items-center">
                    <img src="/src/assets/images/logo.png" alt="FinanTech Logo" className="w-56 mr-8"/>
                </div>

                <div>
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
            </nav>
        </header>
    )
}

export default Header;