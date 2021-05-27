import {React} from 'react';
import './styles.css';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

function Index(){
    return(
        <div class="page">
            <Header/>
            <main>
                conteúdo
            </main>
            <Footer/>
        </div>
    );
 
}

export default Index;