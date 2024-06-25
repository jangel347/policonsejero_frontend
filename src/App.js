import './App.css';
import './css/global.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Link, Route, Routes
} from "react-router-dom";
//Components/pages
import Home from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import FooterComponent from './components/FooterComponent';
import { useState } from 'react';
import ApiController from './controller/ApiController';
import SearchBy from './pages/SearchByPage';
import PreloaderComponent from './components/PreloaderComponent';
import ModalHelpComponent from './components/ModalHelpComponent';

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
    }
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
        <Routes>
          <Route path="/" element={
            <Home
              result={result} changeResult={(a) => changeResult(a)} changeIsLoading={(a) => { changeIsLoading(a) }}
              situation={situation} changeSituation={(a) => changeSituation(a)}
            />}
          />
          <Route path="/buscar_por" element={<SearchBy changeIsLoading={(a) => { changeIsLoading(a) }} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent result={result}  />
      </BrowserRouter>
      <PreloaderComponent isLoading={isLoading}></PreloaderComponent>
      <ModalHelpComponent result={result}></ModalHelpComponent>
    </div >
  );
}
export default App;
