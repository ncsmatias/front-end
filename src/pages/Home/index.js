import {React} from 'react';
import './styles.css';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index(){
    return(
        <>
            <Header/>
                <div class="page">
                    <div class="main-content">
                        conteúdo
                    </div>
                </div>
            <Footer/>
        </>
    );
 
}

export default Index;