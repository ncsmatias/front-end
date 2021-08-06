import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import { InputGroup, FormControl} from 'react-bootstrap'

import { userApi, addressApi } from '../../services';

function Index() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [complement, setComplement] = useState();
    const [state, setSState] = useState();
    const [city, setCity] = useState();
    const [district, setDistrict] = useState();
    const [zipcode, setZip] = useState();
    const history = useHistory();



      async function handleSubmit(e) {
        if(!email || !password || !name || !street || !district || !number || !city || !state || !complement || !zipcode){
            alert("Por favor preencha os dados corretamente!")
        }else{
            e.preventDefault();
            const response = await userApi.cadastro({
                name,
                email,
                password
            });
            console.log(response.data);
            const responseA = await addressApi.cadastro(response.data.id, {
                zipcode,
                district,
                street,
                number,
                complement,
                city,
                state,
                
                
            })
            console.log(responseA.data)
            history.push('/');
        }
      }
    return (
        <>
            
            <div className="page">
                <div className="main">
                    <div className="form-content">
                    <h3>Insira seus dados</h3>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                        <FormControl
                        aria-describedby="basic-addon1"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </InputGroup>
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
                    
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Logradouro</InputGroup.Text>
                    <FormControl
                    aria-describedby="basic-addon1"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Bairro</InputGroup.Text>
                        <FormControl
                        aria-describedby="basic-addon1"
                        value={district}
                        onChange={e => setDistrict(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Número</InputGroup.Text>
                        <FormControl
                        aria-describedby="basic-addon1"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">CEP</InputGroup.Text>
                        <FormControl
                        aria-describedby="basic-addon1"
                        value={zipcode}
                        onChange={e => setZip(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Complemento</InputGroup.Text>
                        <FormControl
                        aria-describedby="basic-addon1"
                        value={complement}
                        onChange={e => setComplement(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Cidade</InputGroup.Text>
                        <FormControl
                        aria-describedby="basic-addon1"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Estado</InputGroup.Text>
                        <FormControl
                        aria-describedby="basic-addon1"
                        value={state}
                        onChange={e => setSState(e.target.value)}
                        />
                    </InputGroup>
                    <button className="buy-button" id="btn-comprar" onClick={handleSubmit} >Cadastrar</button>

                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;