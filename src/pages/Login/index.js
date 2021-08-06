import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import Header from './../../components/Header';
import Footer from './../../components/Footer';

import { authApi } from '../../services';

function Index() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await authApi.login({
            email,
            password
        });
        console.log(response.data.token);
        localStorage.setItem('token', response.data.token);

        history.push('/home');
      }

      function cadastro(){
        history.push('/cadastro');
      }
    return (
        <>
            
            <div className="page">
                <div className="main">
                    <div className="form-content">
                    <h3>Por favor faça seu login</h3>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Login</InputGroup.Text>
                        <FormControl
                        aria-describedby="basic-addon1"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Senha</InputGroup.Text>
                        <FormControl
                        type="password"
                        aria-describedby="basic-addon1"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </InputGroup>
                    <button className="buy-button" id="btn-comprar" onClick={handleSubmit} >Entrar</button>
                    
                    <button className="buy-button" id="btn-comprar" onClick={cadastro}>Não tenho conta</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;