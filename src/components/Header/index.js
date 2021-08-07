import React from 'react';
import { BsBagFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
    return(
        <header className="content">
            <div className="header-content">
                
                <Link to="/home" className="link"><h2 className="logo">MilKasas - Materiais de construção</h2></Link>
                <div className="header-menu">
                    <Link to="/shop" ><BsBagFill size={24} color={'white'}/></Link>
                </div>
            </div>
        </header>
    );
}
export default Header;