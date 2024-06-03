import SearchByComponent from '../components/SearchByComponent';
import SearchByResultsComponent from '../components/SearchByResultsComponent';
import ApiController from '../controller/ApiController';
import '../css/searchBy.css';
import { useState } from 'react';
//Components
export default function SearchBy(props) {
    const [searchType, setSearchType] = useState(false);
    const [searchItem, setSearchItem] = useState(false);
    const [searchItems, setSearchItems] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    async function changeType(type) {
        setSearchType(type);
        if (type == 0) {
            return;
        }
        let apiResponse = false;
        if (type == 1) {
            await ApiController.getRegulations().then((res) => {
                apiResponse = res.regulations;
            });
        } else {
            await ApiController.getTags().then((res) => {
                apiResponse = res.tags;
            });
        }
        setSearchItems(apiResponse);
        console.log(apiResponse);
    }
    async function changeItem(sit) {
        console.log("CAMBIA ITEM =>"+sit);
        setSearchItem(sit);
        let filter = {};
        if (searchType == 1) {
            filter = {
                "reglamento": sit
            }
        } else {
            filter = {
                "etiquetas": sit
            }
        }
        await ApiController.getRulesBy(filter).then((res) => {
            setSearchResult(res)
         }).catch((err) => {
            setSearchResult(false)
         });
    }

    return (
        <div>
            <SearchByComponent
                searchType={searchType} changeType={(a) => changeType(a)}
                searchItem={searchItem} changeItem={(a) => changeItem(a)}
                searchItems={searchItems}></SearchByComponent>
            <SearchByResultsComponent searchResult={searchResult} searchItem={searchItem}></SearchByResultsComponent>
        </div>
    );
}