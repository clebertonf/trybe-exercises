import React from 'react';

class Pokemon extends React.Component {
    render () {
        const { pokemon } = this.props

        return (
            <section>
                    <img src={pokemon.image} alt='poke' className="image" />
                    <h3>{pokemon.name}</h3>
                    <h4>{pokemon.type}</h4>
                    <h4>Peso Medio: {pokemon.averageWeight.value}</h4>
            </section>
        )
    }
}

export default Pokemon;

// nome tipo peso medio imagem

//name
//type
//averageWeight {value, measurementUnit}
//image
//moreInfo