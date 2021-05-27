import React from 'react';

import { Dropdown, Button } from 'react-bootstrap';
import { BsFillPersonFill, BsBagFill } from "react-icons/bs";

import './styles.css';

function Header() {
    return(
        <header class="content">
            <div class="header-content">
                <h2>WEBSHOES</h2>
                <div class="header-menu">
                    <a href="#"><BsBagFill size={24} color={'white'}/></a>
                    
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <BsFillPersonFill size={24}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu id="dropp">
                            <Dropdown.Item href="#">Login</Dropdown.Item>
                            <Dropdown.Item href="#">Cadastro</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
}
export default Header;