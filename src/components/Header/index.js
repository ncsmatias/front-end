import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsFillPersonFill, BsBagFill } from "react-icons/bs";
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

function Header() {
    return(
        <header class="content">
            <div class="header-content">
                
                <Link to="/" class="link"><h2 class="logo">WEBSHOES</h2></Link>
                <div class="header-menu">
                    <Link to="/shop" ><BsBagFill size={24} color={'white'}/></Link>
                    
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