import '../css/HomePage.css';
//Components
import SearchMainComponent from '../components/SearchMainComponent';
import SearchResultComponent from '../components/SearchResultComponent';
import ResultsComponent from '../components/ResultsComponent';
import ModalSurveyComponent from '../components/ModalSurveyComponent';

export default function Home(props) {
    const { result, changeResult, situation, changeSituation } = props;

    return (
        <div>
            {result ? (
                <div>
                    <SearchResultComponent situation={situation} changeSituation={(a) => changeSituation(a)} result={result} changeResult={(a) => changeResult(a)} />
                    <ResultsComponent result={result} />
                </div>
            ) : (
                <div className='full-screen-container'>
                    <SearchMainComponent situation={situation} changeSituation={(a) => changeSituation(a)} result={result} changeResult={(a) => changeResult(a)} />
                </div>
            )}
            <ModalSurveyComponent result={result}></ModalSurveyComponent>
        </div>
    );
}