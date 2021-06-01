import React, { useState } from 'react';

import './styles.css';
import { Modal, Button, Form } from 'react-bootstrap';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header />
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
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Adicionar Endereço de Entrega</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasic">
                                    <Form.Label>Endereço</Form.Label>
                                    <Form.Control type="text" placeholder="Digite o nome da rua ou avenida" />
                                </Form.Group>

                                <Form.Group controlId="formBasic">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="text" placeholder="Número da residência" />
                                </Form.Group>

                                <Form.Group controlId="formBasic">
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formBasic">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formBasic">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formBasic">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Salvar Endereço
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;