import './App.css';
import './css/global.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Link, Route, Routes
} from "react-router-dom";
//Components
import Home from './pages/HomePage';
import Help from './pages/HelpPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const pages = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/ayuda",
      element: <Help />,
      errorElement: <ErrorPage />,
    },
  ];
  const router = createBrowserRouter(pages);
  return (
    <div>
      <BrowserRouter router={router} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ayuda" element={<Help />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <footer className="fixed-bottom">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to={"/"} className="nav-link px-2 text-body-secondary">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to={"/ayuda"} className="nav-link px-2 text-body-secondary">Ayuda</Link>
            </li>
            <li className="nav-item"><a href="https://www.poli.edu.co/content/politicas-y-reglamentos" className="nav-link px-2 text-body-secondary text-decoration-none" target="_blank">Reglamentos y políticas</a></li>
            <li className="nav-item"><a href="https://www.poli.edu.co/terminos-y-condiciones" className="nav-link px-2 text-body-secondary text-decoration-none" target="_blank">Términos y condiciones</a></li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 POLI Consejero. Todos los derechos reservados.</p>
        </footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
