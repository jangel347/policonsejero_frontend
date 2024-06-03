import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import logo from '../images/politecnico-grancolombiano_1.png';
export default function SearchByResultsComponent(props) {
    const { searchResult, searchItem } = props;
    return (

        <div className="d-inline-block container_results w-100 text-center pt-4 pb-5">
            {(searchItem) ?
                <h1>searchItem </h1> :
                (<div className='mt-5'>
                    <img src={logo} alt="Logo Politécnico Grancolombiano" className="logo mb-4" />
                    <h2>Búsqueda por reglamentos o etiquetas</h2>
                </div>)
            }

            <div className='row mx-5 text-left pb-5'>
                <div className='col-md-12'>
                    {(searchResult) ? (
                        ((searchResult.rules.length > 0) ? (searchResult.rules.map((rule, index) => {
                            return (<Card key={'rule_' + index} className="shadow-sm mt-3 card">
                                <Card.Body>
                                    <Card.Title>
                                        {rule.nombre}
                                        <i className="regulation mx-3">{rule.reglamento}</i>
                                    </Card.Title>
                                    <Card.Text className="mb-1">
                                        {rule.contenido}
                                    </Card.Text>
                                    <div className="tags">
                                        {
                                            (searchResult) ? (
                                                rule.etiquetas.map((tag, index) => {
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
                        })) : 'No hay normas relacionadas')) : ''}
                </div>
            </div>
        </div>
    );
}