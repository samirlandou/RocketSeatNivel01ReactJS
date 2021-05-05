import React from 'react';

//Aplicando o conceito de propriedade na função com o parâmetro "props"
/*export default function Header(props){
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}*/


//Aplicando a função com desestruturação do parâmetro.
/*export default function Header({ title }){
    return(
        <header>
            <h1>{title}</h1>
        </header>
    );
}*/


///Aplicando a função com desestruturação do parâmetro 
//e com conceito com children(qu é todo o conteúdo que o componente recebeu)
export default function Header({ title, children }){
    return(
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    );
}