import React, { Component } from 'react';

class CompletedButton extends Component {
    render() { 
        let completed = "badge btn btn-sm btn-success ";
        if (!this.props.completed) completed = "badge btn btn-sm btn-danger";
        let text = "Yes";
        if (!this.props.completed) text = "No";
        return <button onClick={this.props.onCompleted} type="button" className={completed} >{ text }</button>
    }
}
 
export default CompletedButton;