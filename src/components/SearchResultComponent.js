import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import logo from '../images/politecnico-grancolombiano_1.png';
export default function SearchResultComponent(props) {
    const { situation, changeSituation, changeResult } = props;
    return (
        <nav className="navbar navbar-light justify-content-between top-search px-2">
            <div className='col-2 text-center'>
                <Link to={"/"} className="navbar-brand">
                    <img src={logo} alt="Logo Politécnico Grancolombiano" className="logo" onClick={()=>changeResult(false)} />
                </Link>
            </div>
            <div className='col-10'>
                <div className="search">
                    <textarea className="search-input" id='situacion' rows="2"
                        placeholder="Describe la situación..." value={situation} onChange={(e) => changeSituation(e.target.value)}>
                    </textarea>
                    <button onClick={() => changeResult(true)} className="search-icon" >
                        <FaSearch size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}