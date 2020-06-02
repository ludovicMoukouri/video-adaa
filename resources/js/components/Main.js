import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Services from './services';
import axios from 'axios';
import Video from './Video';
import AddVideo from './AddVideo';
import styles from './css/mystyle.module.css';
 
/* An example React component */
class Main extends Component {
	  constructor() {
    super();
    //Initialize the state in the constructor
    this.state = {
        videos: [],
        currentVideo: null,
        block1: "block",
        block2: "none",
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
  }
	componentDidMount() {
		axios.get('/api/videos')
  .then(response => {
    console.log(response.data);
    const videos = response.data
    this.setState({ videos });
  })
  .catch(error => {
    console.log(error);
  });
   
  }
  handleShow() {
  	this.setState({block1: "none", block2: "block"})
  }

  handleShow2() {
  	this.setState({block1: "block", block2: "none"})
  }

  handleAddProduct(video) {
     
   // video.price = Number(video.price);
   // let body = JSON.stringify(video)

   axios.post('api/videos/', video)
      .then(response => {
      	console.log(response.data, 'response response')
    this.setState({
           videos: this.videos.concat(response.data),
           currentVideo : response.data
       })
    })
  .catch(error => {
    console.log(error);
  });
 
 }

	
  renderProducts() {
    return this.state.videos.map(video => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <li class="list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between align-items-center" onClick={
                () =>this.handleClick(video)} key={video.id} >
                { video.titre } 
                <span class="badge badge-primary badge-pill"> time </span>
            </li>    
        );
    })
  }
  handleClick(video) {
    this.setState({currentVideo:video});
  }
    render() {
         /* Some css code has been removed for brevity */
         let tab = this.state.videos.map(video => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            
            <li onClick={
                () =>this.handleClick(video)} key={video.id} >
                { video.title } 
            </li>    
        );
    })
    return (
    <>
        <div className="container-fluid" style={{display: this.state.block1}}>
        	<div className="row">
        		 

            <div className="col-md-2 col-xs-12">
            <a href="javascript:;" onClick={this.handleShow}>Add Video</a>
            </div>
           	<div className="col-md-7 col-xs-12">
            <Video video={this.state.currentVideo} />
            </div>
            <div className="col-md-3 col-xs-12">
             <h3 style={{backgroundColor: "lightblue"}}> All videos </h3>
              <ul className="list-group">
                { this.renderProducts() }
              </ul> 
            </div>
            </div>

            
        </div>
        <div className="container-fluid" style={{display: this.state.block2}}>

        <div className="row">
        		<div className="col-md-3 col-xs-12"> 
            </div> 

           	<div className="col-md-6 col-xs-12">
            <AddVideo onAdd={this.handleAddProduct} />
            </div>
            <div className="col-md-3 col-xs-12">
            	<a href="javascript:;" onClick={this.handleShow2}>List of video</a>
            </div>
            </div>
           </div>
           </> 
       
    );
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}