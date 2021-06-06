import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index(){
    let endereco = '';
    
    endereco = (JSON.parse(sessionStorage.getItem(0)))

    function voltarTelaInicial(){
        sessionStorage.clear();
        alert("Compra efetuada com sucesso!")
    }
    return(
        <>
            <Header />
            <div className="page">
                <div className="content-confirm">
                    <div className="sub-cards">
                        Nome:
                        <div className="value">
                             José da Silva
                        </div>
                    </div> 
                    <div className="sub-cards">
                        CPF:
                        <div className="value">
                             123.456.789-10
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Subtotal:
                        <div className="value">
                             R$ {endereco.valor}
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Valor do Frete:
                        <div className="value">
                             R$ 10
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Valor Total:
                        <div className="value">
                             R$ {endereco.valor + 10}
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Endereço:
                        <div className="value">
                             {endereco.rua}
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Bairro:
                        <div className="value">
                             {endereco.bairro}
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Número:
                        <div className="value">
                             {endereco.numero}
                        </div>
                    </div>
                    <div className="sub-cards">
                        Complemento:
                        <div className="value">
                             {endereco.complemento}
                        </div>
                    </div>
                    <div className="sub-cards">
                        Estado:
                        <div className="value">
                             {endereco.estado}
                        </div>
                    </div>
                    <div className="sub-cards">
                        Cidade:
                        <div className="value">
                             {endereco.cidade}
                        </div>
                    </div>
                    <div className="sub-cards">
                        Data de entrega:
                        <div className="value">
                             18/09/2021
                        </div>
                    </div>

                    <Link to="/" className="link-button">
                        <button className="confirm-button" onClick={voltarTelaInicial}>Finalizar</button>
                    </Link>
                </div>   
            </div>
            <Footer />
        </>
    );
}

export default Index;