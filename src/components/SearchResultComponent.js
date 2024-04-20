import { FaSearch } from 'react-icons/fa';
import logo from '../images/politecnico-grancolombiano_1.png';
export default function SearchResultComponent() {
    return (
        <nav className="navbar navbar-light justify-content-between top-search px-2">
            <div className='col-2 text-center'>
                <a className="navbar-brand">
                    <img src={logo} alt="Logo Politécnico Grancolombiano" className="logo" />
                </a>
            </div>
            <div className='col-10'>
                <div className="search">
                    <textarea className="search-input" id='situacion' rows="2"
                        placeholder="Describe la situación..."></textarea>
                    <button href="#" className="search-icon" >
                        <FaSearch size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}