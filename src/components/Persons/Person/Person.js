import React,{ Component }from 'react';
import cssClass from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props)
    {
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
    }
    componentWillMount()
    {
        console.log('[Person.js] inside componentWillMount');
    }
    componentDidMount()
    {
        console.log('[Person.js] inside componentDidMount');
        if(this.props.position === 0)
        this.inputElement.current.focus();
    }
    focus()
    {
        this.inputElement.current.focus();
    }
    render()
    {   
        console.log('[Person.js] inside render()');
         return <Aux>
             <h1 onClick={this.props.click}>
             I am {this.props.name} and I am {this.props.age} years old.
        <div>My hobby is {this.props.children}</div>
        </h1>
        <input
        // ref={(inp)=>{this.inputElement = inp}} 
        ref = {this.inputElement}
        type="text" onChange={this.props.change}/>
        </Aux>  
    }
}
Person.propTypes={
    name:PropTypes.string,
    key:PropTypes.number,
    age:PropTypes.number,
    click:PropTypes.func,
    change:PropTypes.func
}
export default withClass(Person, cssClass.person);