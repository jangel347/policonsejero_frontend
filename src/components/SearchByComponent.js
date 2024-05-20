import Badge from 'react-bootstrap/Badge';
export default function SearchByComponent(props) {
    const { result } = props;
    return (

        <div className="d-flex w-100 searcherby shadow-sm">
            <div className="form-group col-md-3 px-2">
                <select className="form-control">
                    <option value={1}>Reglamentos</option>
                    <option value={2}>Tags</option>
                </select>
            </div>
            <div className="col-md-9">
                <div className="results px-3">
                    <Badge key={2132} bg="light" className="mx-1 tag">
                        Reglamento académico
                    </Badge>
                    <Badge key={2132} bg="light" className="mx-1 tag tag_active">
                        Reglamento académico
                    </Badge>
                    <Badge key={2132} bg="light" className="mx-1 tag">
                        Reglamento académico
                    </Badge>
                </div>
            </div>
        </div>
    );
}