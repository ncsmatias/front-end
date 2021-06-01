import React from 'react';

import './styles.css';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index() {
    return (
        <>
            <Header />
            <div className="page">
                <div className="main-content">
                    <div className="content-form">
                        <h6>Nome</h6>
                            Daniel
                            <h6>Email</h6>
                            ae@ae.br
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