import React, { PureComponent } from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
    constructor(props)
    {
        super(props);
        console.log('[Persons.js] inside constructor', props);
        this.lastElementRef = React.createRef();
    }
    componentWillMount()
    {
        console.log('[Persons.js] inside componentWillMount');
    }
    componentDidMount()
    {
        console.log('[Persons.js] inside componentDidMount');
        this.lastElementRef.current.focus();
    }
    componentWillReceiveProps(nextProps)
    {
        console.log('[Update Persons.js] inside componentWillReceiveProps', nextProps);
    }
    // shouldComponentUpdate(nextProps , nextState)
    // {
    //     console.log("[Update Persons.js Inside shouldcomponentUpdate",nextProps, nextState)
    //     return nextProps.Persons !== this.props.Persons ||
    //     this.props.Change !== nextProps.Change ||
    //     this.props.Delete !== nextProps.Delete;
    //     // return true;
    // }
    componentWillUpdate(nextProps, nextState)
    {
        console.log('[Update Persons.js] inside componentWillUpdate', nextProps, nextState);
    }
    componentDidUpdate()
    {
        console.log('[Update Persons.js] inside componentDidUpdate');
    }
    render()
    {   
        console.log('[Persons.js] inside render()');
        return this.props.Persons.map((person,index)=>{
            return(
                <Person name={person.name}
                        key={person.id}
                        age={person.age}
                        ref={this.lastElementRef}
                        position={index}
                        click={()=>this.props.Delete(index)}
                        change={(event)=>this.props.Change(event,person.id)}>{person.hobby}</Person>
            )
        })
    }
}
export default Persons;