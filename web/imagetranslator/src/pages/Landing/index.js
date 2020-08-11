import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

import foto from '../../assets/img/foto.svg';
import procurar from '../../assets/img/procurar.svg'

function Landing (){

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <h1>Discovery Image</h1>
                <p>Por onde vamos começar?</p>   
                <div className="buttons-container">
                    <Link to="/image-translate" className="image-translate">
                        <img src={foto} alt="Traduzir texto de imagem"/>
                        Traduzir!
                    </Link>

                    <Link to="/image-analysis" className="image-analysis">
                        <img src={procurar} alt="Traduzir texto de imagem"/>
                        Analisar!
                    </Link>

                </div>     
            </div>    
        </div>
    )

}

export default Landing;