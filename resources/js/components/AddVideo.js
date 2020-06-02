import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Services from './services';
import axios from 'axios';
 
/* An example React component */
class AddVideo  extends Component {
 
   constructor(props) {
    super(props);
       /* Initialize the state. */
       this.state = {
          newVideo: {
              liens: '',
              titre: ''
          }
        }
     
    //Boilerplate code for binding methods with `this`
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

    /* This method dynamically accepts inputs and stores it in the state */
  handleInput(key, e) {
     
    /*Duplicating and updating the state */
    var state = Object.assign({}, this.state.newVideo); 
    state[key] = e.target.value;
    this.setState({newVideo: state });
  }
 /* This method is invoked when submit button is pressed */
  handleSubmit(e) {
    //preventDefault prevents page reload   
    e.preventDefault();
    /*A call back to the onAdd props. The current
     *state is passed as a param
     */
    this.props.onAdd(this.state.newVideo);
  }

    render() {
    const divStyle = {
        /*Code omitted for brevity */ }
     
    return(
      <div> 
        <h2> Add new product </h2>
        <div style={divStyle}>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label> Titre:  </label>
            <input className="form-control" type="text" onChange={(e)=>this.handleInput('titre',e)} />
         
           
          <label> Liens: </label>
            <input className="form-control" type="text" onChange={(e)=>this.handleInput('liens',e)} />
          
           
 
          <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>)
  }
    
}
 
export default AddVideo ;