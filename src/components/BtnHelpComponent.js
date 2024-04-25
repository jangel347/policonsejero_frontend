import { FaQuestionCircle } from 'react-icons/fa';
import {
    Link
} from "react-router-dom";
export default function BtnHelpComponent(props) {
    const { result } = props;
    return <Link id="icon_help" className={((result) ? 'icon_left' : 'icon_right') + " rounded-circle icon_fixed"} data-toggle="tooltip"
        data-placement="left" to={"/ayuda"} title="No sabes cómo utilizar el Poli Consejero?">
        <FaQuestionCircle size={50} />
    </Link>;
}