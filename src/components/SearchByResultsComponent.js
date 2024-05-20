export default function SearchByResultsComponent(props) {
    const { result } = props;
    return (
        
        <div className="d-inline-block container_results w-100 text-center pt-4">
            <h1>Reglamento académico</h1>

            <div className='row mx-4 text-left'>
                <div className='col-md-12'>
                    <div className="shadow-sm mt-3 card">
                        <div className="card-body">
                            <div className="card-title h5">ARTÍCULO 94. Valoración de las faltas
                                <i className="regulation mx-3">Reglamento Académico</i>
                            </div><p className="mb-1 card-text">Una vez evidenciada la falta, se impondrá la sanción de acuerdo con el impacto social, patrimonial, académico o moral que ella produzca, es decir, el daño físico, psicológico, moral o patrimonial derivado del hecho, lo mismo que las circunstancias agravantes, atenuantes o eximentes que puedan concurrir, los antecedentes del estudiante, el grado de participación en la ejecución de la falta y la efectiva realización de la conducta o la tentativa de la misma.</p>
                            <div className="tags">
                                <span className="mx-1 tag badge bg-light">Faltas</span>
                                <span className="mx-1 tag badge bg-light">Procesos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}