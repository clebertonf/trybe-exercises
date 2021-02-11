import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokemon } = this.props;

        return (
            <section>
                {
                    pokemon.map(value => <div className='poke-card'> <Pokemon pokemon={value}/> </div> )
                }
            </section>
        )
    }
}

export default Pokedex;