import './App.css';
import './css/global.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Link, Route, Routes
} from "react-router-dom";
//Components/pages
import Home from './pages/HomePage';
import Help from './pages/HelpPage';
import ErrorPage from './pages/ErrorPage';
import BtnHelpComponent from './components/BtnHelpComponent';
import FooterComponent from './components/FooterComponent';

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
        <BtnHelpComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ayuda" element={<Help />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div >
  );
}

export default App;
