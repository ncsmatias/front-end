import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index() {
    const history = useHistory();

    const [products, setProducts] = useState([]);
    let valor = 0;

    
    
    const renderProducts = (card, index) => {
        
        const a = (card.valor.replace('R$',''))
        
        valor = parseFloat(a) + valor
        localStorage.setItem('userBuyPrice', valor)
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

    function finalCheck(){
            history.push({pathname: '/confirm'})
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
                            {localStorage.getItem('userName')}
                            <h6>Email</h6>
                            {localStorage.getItem('userEmail')}
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
                                    <button className="buy-button" id="btn-comprar" onClick={finalCheck}>Comprar</button>
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