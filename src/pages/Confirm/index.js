import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index(){
    let endereco = '';
    
    endereco = (JSON.parse(sessionStorage.getItem(0)))

    function voltarTelaInicial(){
        sessionStorage.clear();
        localStorage.clear();
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
                        {localStorage.getItem('userName')}
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Subtotal:
                        <div className="value">
                             R$ {localStorage.getItem('userBuyPrice')}
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
                             R$ {parseInt(localStorage.getItem('userBuyPrice')) + 10}
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Endereço:
                        <div className="value">
                             {localStorage.getItem('userStreet')}
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Bairro:
                        <div className="value">
                             {localStorage.getItem('userDistrict')}
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Número:
                        <div className="value">
                             {localStorage.getItem('userNumber')}
                        </div>
                    </div>
                    <div className="sub-cards">
                        Complemento:
                        <div className="value">
                             {localStorage.getItem('userComplement')}
                        </div>
                    </div>
                    <div className="sub-cards">
                        Estado:
                        <div className="value">
                             {localStorage.getItem('userState')}
                        </div>
                    </div>
                    <div className="sub-cards">
                        Cidade:
                        <div className="value">
                             {localStorage.getItem('userCity')}
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