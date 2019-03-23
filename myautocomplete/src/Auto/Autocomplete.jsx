import React from 'react'
import './index.scss';

export default class Autocomplete extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                suggestions : [],
                text : ''
            }
    }

    // THIS CHECKS IF THERE IS AN INPUT AND IF THERE IT SORTS IT AND FILTERS IT FROM THE SUGGESTION
    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({
            suggestions,
            text: value
        })) 

        //OPTION 2
        /*
        if(value.length === 0){
            this.setState(() => ({
                suggestion: []
            }));
        }else {
            const regex = new RegExp(`^${value}`, 'i');
            const suggestions = this.items.sort().filter(v => regex.test(v));
            this.setState(() => ({suggestions}))
        }*/
    }

    suggestionSelected(value){
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions(){
        const { suggestions } = this.state;     //THIS DESTRUCTURES SUGGESTION FROM THE STATE
        if (suggestions.length === 0) {
            return null;
        }return (
            <ul>
              {suggestions.map(i => <li onClick={() => this.suggestionSelected(i)}>{i}</li>)}
            </ul>
        )
    }

    render(){
        const { text } = this.state;
        return(
        <div className='Autocomplete'>
            <input value={text} onChange={this.onTextChanged} type='text' />
            {this.renderSuggestions()}
                {/*<ul> */}
                    {/*were "i" was used tutor used "item" */}
                   {/* {this.item.map(i => <li>{i}</li>)} */}
                {/* </ul> */}
        </div>
    )
    }
}