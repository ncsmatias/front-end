import React, { useState } from 'react';

import './styles.css';
import { Modal, Button } from 'react-bootstrap';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Header/>
                <div class="page">
                    <div class="main-content">
                        <div class="content-form">
                            <h6>Nome</h6>
                            Daniel
                            <h6>Email</h6>
                            ae@ae.br
                            <Button variant="primary" onClick={handleShow}>
                                Informações de entrega
                            </Button>
                        </div>
                        <div class="content-shop">
                            Produtos
                        </div>
                        <Modal show={show}  onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Adicionar Endereço de Entrega</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h6>Rua</h6>
                                <input type="text"/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default Index;