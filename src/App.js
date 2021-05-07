import React, {useState} from 'react';

import './App.css';
import backgroundImage from './assets/ImageBackground.jpg'

import Header from './components/Header';


/**
 * 
 * Conceito do React
 * 
 * Components
 * propriedade
 * Estado & Imutabilidade
 * 
 */
function App(){
    //Essa linha pode ser desestruturado usando a sintaxe valida em baixo. 
    //const projects = ['Desenvolvimento de app', 'Front-End web'];

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-End web']);



    /**
     * useState retorna um array com 2 posições
     * 
     * Na 1a Posição, ele retorno:
     * 1. um Variante com seu valor inicial
     * 2. Função para atualizarmos esse valor
     * 
     */

    function handleAddProject(){
        //projects.push(`Novo Project ${Date.now()}`);

        //Como a array 'projects' é mutável, a gente aplica aqui o conceito de imutabilidade
        //criando um novo array e copiando com '[...projects]' (isso se chama Spread operator) 
        //tudo que já tem dentro do Projects (esse project é o project do constem). 
        setProjects([...projects, `Novo Project ${Date.now()}`]);
        
        console.log(projects);
    }

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

            <Header title= "Project1"/>

            <img width={300}  src={backgroundImage} />

            <Header title= "Project2"/>
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Project</button>
        </>
    );
}

export default App;