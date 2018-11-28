import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters";

class App extends Component {

    state = {
        counters : [
            {id : 1, value : 6},
            {id : 2, value : 8},
            {id : 3, value : 7}
        ]
    };

    constructor () {
        super();
        console.log("Constructor called");
        //set the this.state
    }

    componentDidMount () {
        //perfect to make ajax call and call setState method. It means the component is in the dom
        console.log("App-mounted");
    }

    manageDelete = (counterId) => {
        console.log("Manage Delete called;");
        let cunters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters : cunters
        });
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({
            counters : counters
        });
    };

    resetData = () => {
        const counters = this.state.counters.map(c=> {c.value = 0; return c;});
        this.setState({
            counters : counters
        });
    };

    render() {
        console.log("render called");
    return (
        <React.Fragment>
            <NavBar countersCount={this.state.counters.filter(c=> c.value > 0).length}/>
            <main className="container">
                <Counters onDelete={this.manageDelete} onIncrement={this.handleIncrement} onReset={this.resetData} counters={this.state.counters}/>
            </main>
        </React.Fragment>

    );
  }
}

export default App;
