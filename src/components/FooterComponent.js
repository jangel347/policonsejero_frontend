
import {
    Link
} from "react-router-dom";
export default function FooterComponent() {
    return (
        <footer className="fixed-bottom">
            <ul className="nav justify-content-center border-top mb-1">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link px-2 text-body-secondary">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/ayuda"} className="nav-link px-2 text-body-secondary">Ayuda</Link>
                </li>
                <li className="nav-item"><a href="https://www.poli.edu.co/content/politicas-y-reglamentos" className="nav-link px-2 text-body-secondary text-decoration-none" target="_blank">Reglamentos y políticas</a></li>
                <li className="nav-item"><a href="https://www.poli.edu.co/terminos-y-condiciones" className="nav-link px-2 text-body-secondary text-decoration-none" target="_blank">Términos y condiciones</a></li>
            </ul>
            <p className="text-center text-body-secondary mb-1">© 2024 POLI Consejero. Todos los derechos reservados.</p>
        </footer>
    );
}