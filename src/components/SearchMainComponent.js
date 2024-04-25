import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import logo from '../images/politecnico-grancolombiano_1.png';
export default function SearchMainComponent(props) {
    const { situation, changeSituation, result,changeResult } = props;
    return <main className="container-fluid wrapper fadeInDown">
        <div className="container mt-4 col-md-12 col-12 col-sm-12 col-lg-10 col-xl-8">
            <div className="row d-flex justify-content-center">
                <Link to={"/"} className="logo_link">
                    <img src={logo} alt="Logo Politécnico Grancolombiano" className="logo" />
                </Link>
                <h3 className="heading mt-5 text-center">¿Cómo puedo ayudarte? {result}</h3>
                <div className="d-flex justify-content-center">
                    <div className="search">
                        <textarea className="search-input" id='situacion' rows="2"
                            placeholder="Describe la situación..." value={situation} onChange={(e) => changeSituation(e.target.value)}>
                        </textarea>
                        <button onClick={() => changeResult(true)} className="search-icon">
                            <FaSearch size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>;
}