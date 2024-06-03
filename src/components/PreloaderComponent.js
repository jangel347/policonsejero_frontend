import '../css/PreloaderComponent.css';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react';

export default function PreloaderComponent(props) {
    const { isLoading } = props;
    const [loadingText, setLoadingText] = useState('Generando respuesta');
    const loadingMessages = [
        'Generando respuesta',
        'Consultando reglamento',
        'Analizando situación',
        'Obteniendo normas relacionadas'
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % loadingMessages.length;
            setLoadingText(loadingMessages[index]);
        }, 1500);

        return () => clearInterval(interval);
    }, [loadingMessages]);
    return (
        (isLoading ?
            <div className='preloader'>
                <div>
                    <Spinner animation="border" variant="primary" size='lg' />
                    <h3 className='mt-2 text-secondary'>{loadingText}</h3>
                </div>
            </div>
            : ''
        )
    );

}