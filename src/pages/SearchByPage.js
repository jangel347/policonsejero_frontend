import SearchByComponent from '../components/SearchByComponent';
import SearchByResultsComponent from '../components/SearchByResultsComponent';
import '../css/searchBy.css';
//Components
export default function SearchBy(props) {
    return (
        <div>
            <SearchByComponent></SearchByComponent>
            <SearchByResultsComponent></SearchByResultsComponent>
        </div>
    );
}