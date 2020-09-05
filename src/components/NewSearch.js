import React from 'react';

class NewSearch extends React.Component{
    state={text : ""}
    updateText = (e) => {
        this.setState({text: e.target.value})
        console.log(this.state.text)
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="type here" onChange={this.updateText}/>
                <button>Search Pokemon</button>
            </div>
        )
    }
}

export default NewSearch;