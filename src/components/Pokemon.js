import React from 'react';
import pokeapi from '../apis/pokeapi';
import { connect } from 'react-redux';

class Pokemon extends React.Component{
    state = {pokemon: {}, 
                name: "", 
                index: 0, 
                type: "", 
                image: "", 
                description: ""}

    async getPokemonData() {
        const response = await pokeapi.get('/pokemon/157');
        this.setState({pokemon: response.data})
        this.getPokemonName()  
        this.setState({image: this.state.pokemon.sprites.front_default})
        this.getPokemonType()
        this.getPokemonDescription()
    }
    capitalizeWords(word) {
        return (word.slice(0,1).toUpperCase() + word.slice(1))
    }
    
    getPokemonName() {
        const name = this.capitalizeWords(this.state.pokemon.name)
        this.setState({name: name})   
    }

    getPokemonType() {
        let multipleTypes = []
        let singleType =  ""
        if (Object.keys(this.state.pokemon.types).length > 1) {
            this.state.pokemon.types.map(pokemon => {
                multipleTypes.push(this.capitalizeWords(pokemon.type.name))
        })} else {
            singleType = this.capitalizeWords(this.state.pokemon.types[0].type.name)
        }
        singleType ? this.setState({type : singleType}) : this.setState({type : multipleTypes.join(', ')}) 
    };

    async getPokemonDescription() {
        let response = await pokeapi.get(`pokemon-species/${this.state.pokemon.id}`)
        let description = await response.data.flavor_text_entries[0].flavor_text
        this.setState({description: description})
    }

    componentDidMount(){
        this.getPokemonData()
    }

    render(){
        return(
            <div style={pokemonStyle}>
                <section className="left-column" style={columnStyle}>
                    <h2>{this.state.name} | # {this.state.pokemon.id}</h2>
                    <img src={this.state.image} alt={this.state.pokemon.name}/>                    
                </section>
                <section className="right-column" style={columnStyle}>
                    <h3>Description</h3>
                    <p>Type : {this.state.type}</p>
                    <p>{this.state.description}</p>
                </section>
            </div>
        )
    }
}

const pokemonStyle = {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'black',
    width: '25%',
}

const columnStyle = {
    color: 'white',
    // fontSize: "50px",
    display: "flex",
    flexDirection: "column",
    border: "dotted red 2px",
    textAlign: "center",
    width: "100%"
}

export default Pokemon;