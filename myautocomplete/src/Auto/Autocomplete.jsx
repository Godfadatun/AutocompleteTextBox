import React from 'react'

export default class Autocomplete extends React.Component{
    constructor(props){
        super(props);
            this.item = [
                'Riko',
                'Elijah',
                'Ruben',
                'Gerrard',
                'Gideon',
                'Luke',
                'Timothy',
                'Tony',
                'Victor'
            ];
            this.state = {
                suggestions : []
            }
    }

    // THIS CHECKS IF THERE IS AN INPUT AND IF THERE IT SORTS IT AND FILTERS IT FROM THE SUGGESTION
    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => v.test(regex));
        }
        this.setState(() => ({suggestions}))

        //OPTION 2
        /*
        if(value.length === 0){
            this.setState(() => ({
                suggestion: []
            }));
        }else {
            const regex = new RegExp(`^${value}`, 'i');
            const suggestions = this.items.sort().filter(v => v.test(regex));
            this.setState(() => ({suggestions}))
        }*/
    }

    renderSuggestions(){
        const { suggestions } = this.state;     //THIS DESTRUCTURES SUGGESTION FROM THE STATE
        if (suggestions.length === 0) {
            return null;
        }return (
            <ul>
              {this.suggestions.map(i => <li>{i}</li>)}
            </ul>
        )
    }

    render(){
        return(
        <div>
            <input onChange={this.onTextChanged} type='text' />
            {this.renderSuggestions}
                {/*<ul> */}
                    {/*were "i" was used tutor used "item" */}
                   {/* {this.item.map(i => <li>{i}</li>)} */}
                {/* </ul> */}
        </div>
    )
    }
}