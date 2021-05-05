import React from 'react';
import Header from './components/Header'

function App(){
    return (
       /* <div>
            <Header/>
            <Header/>
        </div>
        */
       
        //conceito de fragmentação abaixo para não usar a div
        <>
            <Header/>
            <Header/>
        </>
    );
}

export default App;