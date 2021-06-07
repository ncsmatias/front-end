import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import { Modal, Button, Form } from 'react-bootstrap'
import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index() {
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [products, setProducts] = useState([]);
    let valor = 0;

    const clienteFrete = {
        rua: '',
        bairro: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
        valor: '',
    }
    const [cep, setCep] = useState();
    const [rua, setRua] = useState();
    const [bairro, setBairro] = useState();
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState();
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    
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

      
    if(products.length === 0){
        for(let i=0; i < sessionStorage.length; i++){
            products.push(JSON.parse(sessionStorage.getItem(i)))
        }
    }

    function checarEndereco(){
        if(!rua || !bairro || !numero || !cidade || !estado){
            alert("Por favor preencha o endereço!")
        }else{
            history.push({pathname: '/confirm'})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!rua || !bairro || !numero || !cidade || !estado){
            alert("Por favor preencha os dados corretamente!")
        }else{
            clienteFrete.rua = rua;
            clienteFrete.bairro = bairro;
            clienteFrete.numero = numero;
            clienteFrete.complemento = complemento;
            clienteFrete.cidade = cidade;
            clienteFrete.estado = estado;
            clienteFrete.valor = valor;
            document.querySelector("#btn-comprar").removeAttribute("disabled")
            handleClose();
        }
        sessionStorage.clear()
        sessionStorage.setItem(0, JSON.stringify(clienteFrete));
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
                            José da Silva
                            <h6>Email</h6>
                            jose@exemplo.br
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
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>*CEP</Form.Label>
                                            <Form.Control type="text"
                                             placeholder="CEP" 
                                             value={cep} 
                                             onChange={e => setCep(e.target.value)}
                                             required/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>*Endereço</Form.Label>
                                            <Form.Control type="text"
                                             placeholder="Endereço" 
                                             value={rua} 
                                             onChange={e => setRua(e.target.value)}
                                             required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>*Bairro</Form.Label>
                                            <Form.Control type="text"
                                             placeholder="Bairro"
                                             value={bairro} 
                                             onChange={e => setBairro(e.target.value)}
                                             required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>*Número</Form.Label>
                                            <Form.Control type="number" 
                                             placeholder="Número"
                                             value={numero} 
                                             onChange={e => setNumero(e.target.value)}
                                             required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>Complemento</Form.Label>
                                            <Form.Control type="text"
                                             placeholder="Complemento"
                                             value={complemento} 
                                             onChange={e => setComplemento(e.target.value)}
                                             required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>*Estado</Form.Label>
                                            <Form.Control type="text"
                                             placeholder="Estado"
                                             value={estado} 
                                             onChange={e => setEstado(e.target.value)}
                                             required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasic">
                                            <Form.Label>*Cidade</Form.Label>
                                            <Form.Control type="text"
                                             placeholder="Cidade"
                                             value={cidade} 
                                             onChange={e => setCidade(e.target.value)}
                                             required />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancelar
                                    </Button>
                                    <Button variant="primary" onClick={handleSubmit}>
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
                                    Valor Total
                                            <div className="value">
                                            R$ {valor}
                                            </div>
                                </div>
                                {/*<Link to="/confirm" className="link-button">*/}
                                    <button className="buy-button" id="btn-comprar" onClick={checarEndereco}>Comprar</button>
                                {/*</Link>*/}
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