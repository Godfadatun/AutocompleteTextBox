import React from 'react';

export default class HidableText extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                isHidden: false
            }
    }

    toggleIsHidden(){
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden
        }))
    }

    render(){
        // JS goes here
        return(
            <div>
                <button onClick={() => this.toggleIsHidden()}>Toggle</button>
                {!this.state.isHidden && this.props.text}
            </div>
        )
}
}
