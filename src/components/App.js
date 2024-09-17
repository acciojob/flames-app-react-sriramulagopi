import  React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = { name1: "", name2: "", data: "" };
    }
    render() {
        const onSubmit = (e) => {
            e.preventDefault();
            const name1 = e.target.name1.value;
            const name2 = e.target.name2.value;
            if(name1==="" || name2===""){
                return;
            }
            let arr = [
                "Siblings",
                "Friends",
                "Love",
                "Affection",
                "Marriage",
                "Enemy",
            ];
            let obj = {};
            let count = 0;
            for (let i of name1) {
                if (obj[i]) {
                    obj[i]++;
                } else {
                    obj[i] = 1;
                }
            }
            for (let i of name2) {
                if (obj[i] && obj[i] > 0) {
                    count++;
                    obj[i]--;
                }
            }
            const result = (name1.length + name2.length - count * 2) % 6;
            this.state.data = arr[result];
            this.setState({ ...this.state });
        };
        const clear = () => {
            this.setState({
                name1: (this.state.name1 = ""),
                name2: (this.state.name2 = ""),
                data: (this.state.data = ""),
            });
        };
        return (
            <div id="main">
                {/* Do not remove the main div */}
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        name="name1"
                        value={this.state.name1}
                        data-testid="input1"
                        onChange={(e) => {
                            this.setState({ name1: (this.state.name1 = e.target.value) });
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Enter second name"
                        name="name2"
                        value={this.state.name2}
                        data-testid="input2"
                        onChange={(e) => {
                            this.setState({ name2: (this.state.name2 = e.target.value) });
                        }}
                    />
                    <button data-testid="calculate_relationship">
                        Calculate Relationship Future
                    </button>
                    <button type="button" onClick={clear} data-testid="answer">
                        Clear
                    </button>
                </form>
                <h3>{this.state.data}</h3>
            </div>
        );
    }
}


export default App;
