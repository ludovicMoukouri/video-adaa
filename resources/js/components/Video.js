import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player'
 
/* An example React component */
class Video  extends Component {
 
    render() {
      let video = this.props.video
         console.log(video)
         /* Some css code has been removed for brevity */
          const divStyle = {
      /*code omitted for brevity */
  }
  if(!video) {
    return(<div style={divStyle}>  Choose one video </div>);
  }
    return (
      <div style={{ position: "relative", paddingTop: "56.25%"}}>
        <ReactPlayer
          style={{ position: "absolute", top: "0", left: "0"}}
          url={video.liens}
          width='100%'
          height='100%'
        />
      </div> 
    );
    }
}
 
export default Video ;