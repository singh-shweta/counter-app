import React, {Component} from 'react';

class Counter extends Component {
    /*state = {
        value : this.props.counter.value,
        listitems : []
    };
    needed to comment as each component has a local state so even if we change the state on reset for the counters,
     the state here does not change and does not set to 0. Therefore need to remove local state for this
    CONTROLLED component*/

    /*renderList () {
        if (!this.state.listitems.length) {
            return null;
        } else {
            return (<ul>
                {this.state.listitems.map(item => <li key={item}>{item}</li>)}
            </ul>);
        }

    }*/

    /*increment = () => {
        this.setState({ value : this.state.value + 1 });
    };*/


    componentDidUpdate (prevProps, prevState) {
        //called after component updated. compare new props with old props
        console.log(prevProps);
        console.log(prevState);

        if(prevProps.counter.value !== this.props.counter.value) {
            //we can make ajax calls to get the new value
        }
    }

    componentWillUnmount() {
        console.log("Counter Unmount");
    }

    render () {
        //this.props.children gives you the h4 dom sent within counter tags
        console.log("Counter rendered");
        const { id, value } = this.props.counter;
        return (
            <div>
                <h4>Counter #{id}</h4>
                <span className="badge badge-warning m-2">{this.props.counter.value}</span>
                {/*<button className="btn btn-primary" onClick={this.increment}>Increment</button>*/}
                <button className="btn btn-primary m-1" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button className="btn btn-primary m-1 btn-danger" onClick={() => this.props.onDelete(id)}>Delete</button>
                {/*{this.renderList()}*/}
            </div>
        );
    }
}

export default Counter;
