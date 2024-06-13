import React, { useState } from 'react';
import Modal from 'react-modal';
import ApiController from '../controller/ApiController';

// Estilos para el modal (puedes personalizarlos a tu gusto)
const customStyles = {
    content: {
        width: "900px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function ModalComponent(props) {
    const { result } = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        usabilidad: 0,
        rendimiento: 0,
        precision: 0,
        utilidad: 0,
        amigable: 0,
        uso_futuro: false,
    });

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : Number(value),
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        await ApiController.createStadistic(formData).then((res) => {
            console.log(res)
        });
        console.log('Formulario enviado:', formData);
        closeModal();
    };

    return (
        <div>
            {(result ?
                <div className='w-100 text-center my-4'>
                    ¿La respuesta fue útil?
                    <button className='btn btn-secondary mx-4' onClick={openModal}>Expresa tu opinión</button>
                </div>
                : '')}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel=""
            >
                <h2 className='text-center mb-4'>Encuesta de satisfacción</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="mb-2" htmlFor="usabilidad_input">¿Qué tan fácil es usar el policonsejero?</label>
                        <select
                            className="form-control"
                            type="number"
                            name="usabilidad_input"
                            value={formData['usabilidad']}
                        >
                            <option>Seleccione una opción</option>
                            <option value='1'>Muy difícil</option>
                            <option value='2'>Difícil</option>
                            <option value='3'>Normal</option>
                            <option value='4'>Fácil</option>
                            <option value='5'>Muy fácil</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2" htmlFor="rendimiento_input">¿Cómo calificarías el rendimiento de la aplicación?</label>
                        <select
                            className="form-control"
                            type="number"
                            name="rendimiento_input"
                            value={formData['rendimiento']}
                        >
                            <option>Seleccione una opción</option>
                            <option value='1'>Muy lento</option>
                            <option value='2'>Lento</option>
                            <option value='3'>Normal</option>
                            <option value='4'>Rápido</option>
                            <option value='5'>Muy rápido</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2" htmlFor="precision_input">¿Cómo calificas la precisión de la respuesta y normas que brindó la aplicación?</label>
                        <select
                            className="form-control"
                            type="number"
                            name="precision_input"
                            value={formData['precision']}
                        >
                            <option>Seleccione una opción</option>
                            <option value='1'>Muy malo</option>
                            <option value='2'>Malo</option>
                            <option value='3'>Normal</option>
                            <option value='4'>Bueno</option>
                            <option value='5'>Muy bueno</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2" htmlFor="utilidad_input">¿Qué tan útil fue utilizar la aplicación?</label>
                        <select
                             className="form-control"
                             type="number"
                             name="utilidad_input"
                             value={formData['utilidad']}
                        >
                            <option>Seleccione una opción</option>
                            <option value='1'>No es útil</option>
                            <option value='2'>Un poco útil</option>
                            <option value='3'>Normal</option>
                            <option value='4'>Útil</option>
                            <option value='5'>Muy útil</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2" htmlFor="amigable_input">¿Qué tan amigable fue tu experiencia con la aplicación?</label>
                        <select
                             className="form-control"
                             type="number"
                             name="amigable_input"
                             value={formData['amigable']}
                        >
                            <option>Seleccione una opción</option>
                            <option value='1'>No es amigable</option>
                            <option value='2'>Un poco amigable</option>
                            <option value='3'>Normal</option>
                            <option value='4'>amigable</option>
                            <option value='5'>Muy amigable</option>
                        </select>
                    </div>
                    <div className='form-group mb-3'>
                        <label className="mb-2" htmlFor="amigable_input">¿Volverías a usar el policonsejero?</label>
                        <label className="switch">
                            <input
                                type="checkbox"
                                name="uso_futuro"
                                checked={formData.uso_futuro}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <button type="submit" className='btn btn-success mr-2'>Enviar</button>
                    <button type="button" className='btn btn-danger mx-2' onClick={closeModal}>Cerrar</button>
                </form>
            </Modal>
        </div>
    );
}