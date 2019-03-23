import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import HidableText from './hidableText'
import Autocomplete from './Auto/Autocomplete'
import countries from './Auto/countries.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className='App-Component'>
       
         <div className='App-Component'>
         <h1 className='Heading'>COUNTRY Autocomplete App <br /><a className='Author' href="https://github.com/Godfadatun" target="_blank">by Danny</a></h1>
            {/* <HidableText text="changing Text!" /> */}
              <Autocomplete items={countries}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
