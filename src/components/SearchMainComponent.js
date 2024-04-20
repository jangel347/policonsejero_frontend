import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import logo from '../images/politecnico-grancolombiano_1.png';
export default function SearchMainComponent(setSituationF) {
    const [situationVal, setSituationVal] = useState('');
    return <main className="container-fluid wrapper fadeInDown">
        <div className="container mt-4 col-md-12 col-12 col-sm-12 col-lg-10 col-xl-8">
            <div className="row d-flex justify-content-center">
                <img src={logo} alt="Logo Politécnico Grancolombiano" className="logo" />
                <h3 className="heading mt-5 text-center">¿Cómo puedo ayudarte?</h3>
                <div className="d-flex justify-content-center">
                    <div className="search">
                        <textarea className="search-input" id='situacion' rows="2"
                            placeholder="Describe la situación..."></textarea>
                        <button href="#" className="search-icon" >
                            <FaSearch size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>;
}