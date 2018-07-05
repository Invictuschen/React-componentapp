import React, { Component } from 'react';

class ErrorBoundary extends Component{
    state = {
        errorStatus: false,
        errorMessage:''
    }
    componentDidCatch = ( error, info ) => {
        this.setState(
            {
                errorStatus:true,
                errorMessage:error
            }
        )
    }
    render(){
            if(this.state.errorStatus)
            {
                return(
                    <h1> {this.state.errorMessage}</h1>
                )
            }
            else return this.props.children;

    }
}
export default ErrorBoundary;