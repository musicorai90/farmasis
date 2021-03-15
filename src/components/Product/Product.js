import styles from "./Styles.module.css"

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { useHistory, useRouteMatch } from 'react-router-dom'

import { toast } from 'react-toastify'
 
Modal.setAppElement('#root')
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.3)';

function Product(props) {
    const clases = styles
    const history = useHistory()
    const match = useRouteMatch()
    
    var subtitle
    const [modalIsOpen,setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        subtitle.style.color = '#000'
    }

    function closeModal(){
        setIsOpen(false)
    }

    function toList(){
        closeModal()
	let result           = ''
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        for ( var i = 0; i < 10; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        toast(<div>Reservado con exito<br/><br/>(Código: {result})</div>,{className: clases.toast})
    }

    return (
        <div className={clases.product}>
            <span>$ 100</span>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src={props.photo} alt="Photo by Caroline Attwood on Unsplash" />
            <a href="#" onClick={openModal}>Reservar</a>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              className={clases.modal}
              contentLabel="Example Modal"
            >
                <button className={clases.modalClose} onClick={closeModal}>X</button>
                <h2 className={clases.modalTitle} ref={_subtitle => (subtitle = _subtitle)}>Ingrese los datos:</h2>
                <form>
                    <div className={clases.modalInputContent}>
                        <input placeholder="Nombre" />
                        <input placeholder="Cédula" /> 
                    </div>
                    <input className={clases.modalButton} type="submit" value="Reservar" onClick={toList} />
                </form>
            </Modal>
        </div>
    )
}

export default Product;
