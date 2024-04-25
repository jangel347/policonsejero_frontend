import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
export default function ResultsComponent(props) {
    const { result } = props;
    return (
        <div className="d-inline-block container_results">
            <div className="d-block w-100">
                <div className="row w-100 m-0 p-0">
                    <div className="col-2 mt-3 text-right">
                        <i className="font-weight-light text-secondary">
                            Respuesta
                        </i>
                    </div>
                    <div className="col-10">
                        <h4 className="mainResult mt-3 mb-3 mx-2">
                            {(result) ? result.response : ''}
                            <div className="tags tags2x mt-2">
                                {
                                    (result) ? (
                                        result.tags.map((tag, index) => {
                                            return (
                                                <Badge key={index} bg="light" className="mx-1 tag">
                                                    {tag}
                                                </Badge>
                                            )
                                        })
                                    ) : ''
                                }
                            </div>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="d-block w-100">
                <div className="row w-100 m-0 p-0">
                    <div className="col-2 mt-3 text-right">
                        <i className="font-weight-light text-secondary mt-3 d-block">
                            Referencias
                        </i>
                    </div>
                    <div className="col-10">
                        <hr></hr>
                        {(result) ? (result.rules.map((rule, index) => {
                            return (<Card style={{ width: '100%' }} key={'rule_' + index} className="shadow-sm mt-3">
                                <Card.Body>
                                    <Card.Title>
                                        {rule.name}
                                        <i className="regulation mx-3">{rule.reglamento}</i>
                                    </Card.Title>
                                    <Card.Text className="mb-1">
                                        {(rule.contenido.map((contenido) => {
                                            return (contenido.contenido);
                                        }))}
                                    </Card.Text>
                                    <div className="tags">
                                        {
                                            (result) ? (
                                                rule.tags.map((tag, index) => {
                                                    return (
                                                        <Badge key={index} bg="light" className="mx-1 tag">
                                                            {tag}
                                                        </Badge>
                                                    )
                                                })
                                            ) : ''
                                        }
                                    </div>
                                </Card.Body>
                            </Card>)
                        })) : 'No hay artículos relacionados'}
                    </div>
                </div>
            </div>
        </div>
    );
}