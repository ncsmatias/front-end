import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { Modal, Button, Form } from 'react-bootstrap'
import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [products, setProducts] = useState([]);
    let valor = 0;

    for(let i=0; i < sessionStorage.length; i++){
        products.push(JSON.parse(sessionStorage.getItem(i)))
    }

    
    const renderProducts = (card, index) => {
        
        const a = (card.valor.replace('R$',''))
        
        valor = parseFloat(a) + valor
        return(
            <div className="card-product" key={index}>
                <div className="card-product-content">
                    <img src={process.env.PUBLIC_URL + card.imagem} className="prod-img" />
                    <div className="card-product-info">
                        <h5>{card.produto}</h5>
                        <br></br>
                        <br></br>
                                <br></br>
                                <b>Valor: {card.valor}</b>
                            </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <Header />
            <div className="page">
                <div className="main-content">
                    <div className="content-form">
                        <div className="user">
                            <h5>Suas Informações</h5>
                            <h6>Nome</h6>
                            Fulano Silva Santos
                            <h6>Email</h6>
                            fulano@exemplo.br
                        </div>

                        <div className="endereco">
                            <Button variant="secondary" onClick={handleShow}>
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
                            {products.map(renderProducts)}
                        </div>
                        <div className="resume">
                            <div className="title">Resumo da compra</div>
                            <div className="card-resume">
                                <div className="sub-cards">
                                    Subtotal
                                            <div className="value">
                                            R$ {valor}
                                            </div>
                                </div>
                                <div className="sub-cards">
                                    Descontos
                                            <div className="value">
                                            R$ 10
                                            </div>
                                </div>
                                <div className="sub-cards">
                                    Frete
                                            <div className="value">
                                            R$ 18
                                            </div>
                                </div>
                                <div className="sub-cards">
                                    Valor total
                                            <div className="value">
                                            R$ {valor - 10 + 18}
                                            </div>
                                </div>
                                <Link to="/confirm" className="link-button">
                                    <button className="buy-button">Comprar</button>
                                </Link>
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