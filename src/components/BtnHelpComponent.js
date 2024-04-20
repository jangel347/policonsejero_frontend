import { FaQuestionCircle } from 'react-icons/fa';
import {
    Link
  } from "react-router-dom";
export default function BtnHelpComponent() {
    return <Link id="icon_help" className="rounded-circle" data-toggle="tooltip"
        data-placement="left" to={"/ayuda"} title="No sabes cómo utilizar el Poli Consejero?">
        <FaQuestionCircle size={50}/>
    </Link>;
}