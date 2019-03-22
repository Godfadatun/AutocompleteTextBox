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
                suggestion : []
            }
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        if(value.lenght === 0){
            this.setState(() => ({
                suggestion: []
            }))
        }
    }

    render(){
        return(
        <div>
            <input onChange={this.onTextChanged} type='text' />
                <ul>
                    {/*were "i" was used tutor used "item" */}
                    {this.item.map(i => <li>{i}</li>)}
                </ul>
        </div>
    )
    }
}