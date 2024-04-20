import '../css/HomePage.css';
import { useState } from "react";
import logo from '../images/politecnico-grancolombiano_1.png';
//Components
import SearchMainComponent from '../components/SearchMainComponent';
import SearchResultComponent from '../components/SearchResultComponent';

export default function Home() {

    const [situationVal, setSituationEl] = useState('');
    const [result, setResult] = useState(false);
    const setSituation = (d)=>{
        setSituationEl(d)
    }
    const reqSearch = async () => {
        const apiResponse = await fetch(
            'http://localhost:3900/api/search/list', {
            method: 'POST',
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "situation": situationVal
            }),
        });
        const data = await apiResponse.json();
        setResult(data);
    }

    return (
        <div>
            {!result ? (
                // <div>HOLA2</div>
                <SearchResultComponent setSituationF={setSituation}  />
            ) : (
                <SearchMainComponent setSituationF={setSituation} />
                // <div>HOLA2</div>
            )}

        </div>
    );
}