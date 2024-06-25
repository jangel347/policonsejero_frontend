import React, { useState } from 'react';
import Modal from 'react-modal';
import ApiController from '../controller/ApiController';
import BtnHelpComponent from './BtnHelpComponent';

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

export default function ModalHelpComponent(props) {
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
            <BtnHelpComponent result={result} openModal={()=>openModal()}/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel=""
            >
                <h2 className='text-center mb-4'>¿Cómo utilizar el PoliConsejero?</h2>
                <p>
                    Ingresa una pregunta o situación en la caja de búsqueda
                </p>
                <p>
                    Ingresa una pregunta o situación en la caja de búsqueda
                </p>
            </Modal>
        </div>
    );
}