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
import BtnExportComponent from './components/BtnExportComponent';
import FooterComponent from './components/FooterComponent';
import { useState } from 'react';
import ApiController from './controller/ApiController';
import SearchBy from './pages/SearchByPage';

function App() {
  const pages = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/buscar_por",
      element: <SearchBy />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/ayuda",
      element: <Help />,
      errorElement: <ErrorPage />,
    },
  ];
  const router = createBrowserRouter(pages);
  const [result, setResult] = useState(false);
  const [situation, setSituation] = useState('');
  async function changeResult(result = false) {
    if (!result || situation == '') {
      setResult(false);
      return;
    }
    let apiResponse = false;
    await ApiController.search(situation).then((res) => {
      apiResponse = res;
    });
    setResult(apiResponse);
    console.log(apiResponse);
  }
  function changeSituation(sit) {
    setSituation(sit);
  }
  return (
    <div>
      <BrowserRouter router={router} >
        <BtnHelpComponent result={result} />
        {(result) ?
          <BtnExportComponent result={result} />
          : ''}
        <Routes>
          <Route path="/" element={
            <Home
              result={result} changeResult={(a) => changeResult(a)}
              situation={situation} changeSituation={(a) => changeSituation(a)}
            />}
          />
          <Route path="/ayuda" element={<Help />} />
          <Route path="/buscar_por" element={<SearchBy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent result={result} />
      </BrowserRouter>
    </div >
  );
}
export default App;
