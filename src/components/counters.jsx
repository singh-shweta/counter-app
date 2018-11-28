import React, {Component} from 'react';
import Counter from './counter';

export default class Counters extends Component {

    /*state = {
        counters : [
            {id : 1, value : 6},
            {id : 2, value : 8},
            {id : 3, value : 7}
        ]
    };

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
    };*/

    renderCounters () {
        return this.props.counters.map(counter => (<Counter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}>
        {/*<h4>Counter #{counter.id}</h4>*/}
        </Counter>));
    };

    /*resetData = () => {
        const counters = this.state.counters.map(c=> {c.value = 0; return c;});
        this.setState({
            counters : counters
        });
    };*/

    render () {

        console.log("Counters-rendered")

        return(
            <div>
                <button className="btn btn-dark" onClick={this.props.onReset}>Reset</button>
                {this.renderCounters()}
            </div>
        )
    }
}
