import { FaFileExport  } from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function BtnExportComponent() {
    return <Link id="icon_export" className="rounded-circle icon_fixed icon_left" data-toggle="tooltip"
        data-placement="right" to={"/ayuda"} title="Exportar caso">
        <FaFileExport size={50} />
    </Link>;
}