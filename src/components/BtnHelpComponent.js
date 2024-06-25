import { click } from '@testing-library/user-event/dist/click';
import { FaQuestionCircle } from 'react-icons/fa';
import {
    Link
} from "react-router-dom";
export default function BtnHelpComponent(props) {
    const { result, openModal } = props;
    const openModalNow = () => {
        openModal(true);
    };
    return <button id="icon_help" className={((result) ? 'icon_left' : 'icon_right') + " rounded-circle icon_fixed"} data-toggle="tooltip"
        data-placement="left" title="No sabes cómo utilizar el Poli Consejero?" onClick={()=>openModalNow()}>
        <FaQuestionCircle size={50} />
    </button>;
}