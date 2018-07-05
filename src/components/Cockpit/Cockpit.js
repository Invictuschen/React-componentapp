import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';
const Cockpit = (props) =>{
    const assignedClasses=[];
    let btnClass = classes.Button;
    if(props.Persons.length <= 2)
    {
        assignedClasses.push(classes.red);
    }

    if(props.Persons.length <= 1)
    {
        assignedClasses.push(classes.bold);
    }
    if(props.Personshow)
    {
        btnClass = [classes.Button, classes.Red].join(' ');//when the button is hit, btnclass get the css class: classes.red
    }
    return(
        <Aux>
        <h1>{ props.Title }</h1>
        <p className={assignedClasses.join(' ')}>This is a practice</p>
    {/*dynamic class need to make the array use .join function to reach an array with ' '*/}
        <button className={btnClass} onClick={props.Toggle}>Toggle persons</button>
        </Aux>
    )
}
export default Cockpit;