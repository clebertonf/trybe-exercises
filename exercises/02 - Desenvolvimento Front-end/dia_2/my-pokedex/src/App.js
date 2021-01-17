import React from 'react';
import data from './componentes/data'
import './App.css';
import Pokedex from './componentes/Pokedex';
import Header from './componentes/Header';


class App extends React.Component {
  render () {
    return (
    <section>
      <Header />
      <Pokedex pokemon={data}/>
    </section>
      
    ) 
    
  }
}

export default App;
