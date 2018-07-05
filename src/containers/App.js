import React, { PureComponent } from 'react';
import classes from './App.css'; //the imported classes js object should be thought as a string of css file
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state = {
            persons: [
                { id: 'l1', name: 'Yong', age: 22, hobby: 'football' },
                { id: 'l2', name: 'Liang', age: 32, hobby: 'basketball' },
                { id: 'l3', name: 'Lu', age: 12, hobby: 'baseball' }
            ],
            personShow: false,
            toggleClicked: 0
        };
        console.log('[App.js] inside constructor', props);
    }
    componentWillMount()
    {
        console.log('[App.js] inside componentWillMount');
    }
    componentDidMount()
    {
        console.log('[App.js] inside componentDidMount');
    }
    // shouldComponentUpdate(nextProps , nextState)
    // {
    //     console.log("[Update App.js Inside shouldcomponentUpdate",nextProps, nextState)
    //     // return true;
    //     return this.state.persons !== nextState.persons ||
    //     this.state.personShow !== nextState.personShow;
    // }
    componentWillUpdate(nextProps, nextState)
    {
        console.log('[Update App.js] inside componentWillUpdate', nextProps, nextState);
    }
    componentDidUpdate()
    {
        console.log('[Update App.js] inside componentDidUpdate');
    }
   
    togglePersonHandler = () => {
        let showperson = this.state.personShow;
        this.setState(( prevState, props )=>{
            return {
                personShow: !showperson,
                toggleClicked: prevState.toggleClicked + 1
            }
          })
    }
    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });

    }
    nameChangeHandler = (event, id) => {
        // const personIndex = this.state.persons.findIndex(
        //     (p)=>{
        //         return p.id===id;
        //     })
        //
        // const persons= this.state.persons.slice();
        // persons[personIndex].name=event.target.value;
        // this.setState({persons:persons});

        // there is a better and optimized way

        const personIndex = this.state.persons.findIndex(p => { return p.id === id }); //in angularjs we use ng-repeat, in angular 2
        //we use ngFor, in reactjs, we need to use built-in javascript function: map or find/findIndex to traverse an array
        // const person = Object.assign( {}, this.state.persons[personIndex]);
        const person = {...this.state.persons[personIndex] };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons: persons });
    }
    render() {
        console.log('[App.js] inside render()')
        // return React.createElement('div',null,React.createElement('h1',null,'I\'m a react application'));
        let persons = null;
        // let rnd = Math.random();
        // if(rnd > 0.7)
        //     throw new Error('Something went wrong');

        if (this.state.personShow) {
            persons = < Persons Delete = { this.deletePersonHandler }
            Persons = { this.state.persons }
            Change = { this.nameChangeHandler }
            />;
        }
        return ( < ErrorBoundary >
            <Aux>
            <button onClick={()=>{this.setState({personShow:true})}}>Show persons</button>
            <Cockpit Title = { this.props.title }
            Persons = { this.state.persons }
            Toggle = { this.togglePersonHandler }
            Personshow = { this.state.personShow }
            /> { persons }
            </Aux></ErrorBoundary >
        )
    }
}
export default withClass(App, classes.App);