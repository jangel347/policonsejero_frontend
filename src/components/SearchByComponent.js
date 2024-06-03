import Badge from 'react-bootstrap/Badge';
export default function SearchByComponent(props) {
    const { searchType, searchItem, changeType, changeItem, searchItems } = props;
    return (

        <div className="d-flex w-100 searcherby shadow-sm px-3">
            <div className="form-group col-md-3 px-2">
                <select className="form-control" onChange={(e) => changeType(e.target.value)}>
                    <option value="0">Selecciona una opción</option>
                    <option value="1">Reglamentos</option>
                    <option value="2">Etiquetas</option>
                </select>
            </div>
            <div className="col-md-9">
                <div className="results px-3">
                    {
                        (searchItems) ? (
                            searchItems.map((item, index) => {
                                return (
                                    <Badge key={index} bg="light" className="mx-1 tag" onClick={(e) => changeItem(item.nombre)}>
                                        {item.nombre}
                                    </Badge>
                                )
                            })
                        ) : ''
                    }
                </div>
            </div>
        </div>
    );
}