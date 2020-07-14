import React from 'react';

class Microfrontend2 extends React.Component {
    constructor(props) {
        super(props);
        this.state=props.data
    }
    render() {
        if(this.state){
            return (<h4>This is the body of Microfrontend2 - (Data from parent : <i>{this.state.data}</i>)</h4>)
        } else {
            return (<h4>Loading... </h4>)
        }
        
    }
}



export default Microfrontend2