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
import PreloaderComponent from './components/PreloaderComponent';

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
  const [isLoading, setIsLoading] = useState(false);
  const [situation, setSituation] = useState('');
  async function changeResult(result = false) {
    if (!result || situation == '') {
      setResult(false);
      return;
    }
    let apiResponse = false;
    setIsLoading(true);
    await ApiController.search(situation).then((res) => {
      apiResponse = res;
      setIsLoading(false);
    });
    setResult(apiResponse);
    console.log(apiResponse);
  }
  function changeSituation(sit) {
    setSituation(sit);
  }
  function changeIsLoading(state) {
    setIsLoading(state);
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
              result={result} changeResult={(a) => changeResult(a)} changeIsLoading={(a) => { changeIsLoading(a) }}
              situation={situation} changeSituation={(a) => changeSituation(a)}
            />}
          />
          <Route path="/ayuda" element={<Help />} />
          <Route path="/buscar_por" element={<SearchBy changeIsLoading={(a) => { changeIsLoading(a) }} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent result={result}  />
      </BrowserRouter>
      <PreloaderComponent isLoading={isLoading}></PreloaderComponent>
    </div >
  );
}
export default App;
