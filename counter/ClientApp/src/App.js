import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
    state = {
        //declaring initial counters
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    //for increment
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counters[index] };
        counters[index].value++;
        this.setState({ counters });
    };

    //for decrement
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counters[index] };
        counters[index].value--;
        this.setState({ counters });
    };

    //for reset
    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    //for delete
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };

    //for restart
    handleRestart = () => {
        window.location.reload();
    };

    render() {
        return (
            <div>
                <NavBar
                    totalCounters={this.state.counters.filter((c) => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        onRestart={this.handleRestart}
                    />
                </main>
            </div>
        );
    }
}
export default App;