import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index(){
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
                             1234456
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Valor da compar:
                        <div className="value">
                             R$100,00
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Endereço:
                        <div className="value">
                             Antonio Onofre Gerbasi
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Bairro:
                        <div className="value">
                             Jardim das Rosas
                        </div>
                    </div> 
                    <div className="sub-cards">
                        Número:
                        <div className="value">
                             110
                        </div>
                    </div>
                    <div className="sub-cards">
                        Complemento:
                        <div className="value">
                             -
                        </div>
                    </div>
                    <div className="sub-cards">
                        Estado:
                        <div className="value">
                             São Paulo
                        </div>
                    </div>
                    <div className="sub-cards">
                        Cidade:
                        <div className="value">
                             Presidente Prudente
                        </div>
                    </div>
                    <div className="sub-cards">
                        Data de entrega:
                        <div className="value">
                             18/09/2021
                        </div>
                    </div>

                    <Link to="/" className="link-button">
                        <button className="confirm-button">Finalizar</button>
                    </Link>
                </div>   
            </div>
            <Footer />
        </>
    );
}

export default Index;