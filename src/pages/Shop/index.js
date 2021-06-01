import React, { useState } from 'react';

import './styles.css';
import { Modal, Button, Form } from 'react-bootstrap'
import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <div className="page">
                <div className="main-content">
                    <div className="content-form">
                        <div className="user">
                            <h6>Nome</h6>
                            Daniel
                            <h6>Email</h6>
                            ae@ae.br
                        </div>

                        <div className="endereco">
                            <Button variant="primary" onClick={handleShow}>
                                Endereço de Entrega
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Endereço de Entrega</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>Endereço</Form.Label>
                                            <Form.Control type="text" placeholder="Endereço" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>Bairro</Form.Label>
                                            <Form.Control type="text" placeholder="Bairro" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>Número</Form.Label>
                                            <Form.Control type="number" placeholder="Número" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>Complemento</Form.Label>
                                            <Form.Control type="text" placeholder="Complemento" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>Estado</Form.Label>
                                            <Form.Control type="text" placeholder="Estado" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>Cidade</Form.Label>
                                            <Form.Control type="text" placeholder="Cidade" />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancelar
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Salvar endereço
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    <div className="content-shop">
                        <div className="product">
                            <div className="title">Meu carrinho</div>
                            <div className="card-product">
                                <div className="card-product-content">
                                    <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_vitrine2.jpg?ts=1610980230" className="prod-img" />
                                    <div className="card-product-info">
                                        <h5>Tênis Nike Revolution 5 Masculino</h5>
                                        <br></br>
                                        <br></br>
                                                Tamanho: 40
                                                <br></br>
                                                Quantidade: 3
                                                <br></br>
                                                Valor: R$ 299,00
                                            </div>
                                </div>
                            </div>
                            <div className="card-product">
                                <div className="card-product-content">
                                    <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_vitrine2.jpg?ts=1610980230" className="prod-img" />
                                    <div className="card-product-info">
                                        <h5>Tênis Nike Revolution 5 Masculino</h5>
                                        <br></br>
                                        <br></br>
                                                Tamanho: 40
                                                <br></br>
                                                Quantidade: 3
                                                <br></br>
                                                Valor: R$ 299,00
                                            </div>
                                </div>
                            </div>
                            <div className="card-product">
                                <div className="card-product-content">
                                    <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_vitrine2.jpg?ts=1610980230" className="prod-img" />
                                    <div className="card-product-info">
                                        <h5>Tênis Nike Revolution 5 Masculino</h5>
                                        <br></br>
                                        <br></br>
                                                Tamanho: 40
                                                <br></br>
                                                Quantidade: 3
                                                <br></br>
                                                Valor: R$ 299,00
                                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume">
                            <div className="title">Resumo da compra</div>
                            <div className="card-resume">
                                <div className="sub-cards">
                                    Subtotal
                                            <div className="value">
                                        R$ 100,00
                                            </div>
                                </div>
                                <div className="sub-cards">
                                    Frete
                                            <div className="value">
                                        R$ 5,00
                                            </div>
                                </div>
                                <div className="sub-cards">
                                    Descontos
                                            <div className="value">
                                        R$ 10,00
                                            </div>
                                </div>
                                <div className="sub-cards">
                                    Valor total
                                            <div className="value">
                                        R$ 95,00
                                            </div>
                                </div>
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;