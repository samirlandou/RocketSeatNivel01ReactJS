import React from 'react';
import Header from './components/Header'


/**
 * 
 * Conceito do React
 * 
 * Components
 * propriedade
 * Estado
 */
function App(){
    return (
       /* <div>
            <Header/>
            <Header/>
        </div>
        */
       
        /**
         * 
         * conceito de fragmentação abaixo para não usar a div
         * foram definidos dentro do primeiro <Header/> o conceito de "children" 
         * e para acessar esses Children, basta chamar com {children}
         * 
         *
         */
        <>
            <Header title= "Menu">
                <ul>
                    <li>Homepage1</li>
                    <li>Homepage2</li>
                    <li>HomePage3</li>
                </ul>
            </Header>

            <Header title= "Project"/>
        </>
    );
}

export default App;