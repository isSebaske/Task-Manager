import React, { Component } from 'react';


class ObjectIdButton extends Component {

render() { 
    
    
        return (<button type='button' onClick={ this.props.alert} className='btn btn-light btn-lg'><strong>{this.props.task.title}</strong></button>);
    }
}
 
export default ObjectIdButton;