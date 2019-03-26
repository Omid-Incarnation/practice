import React, {Component} from "react";

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "Omid",
            age: 30
        }
    }

    render(){
        return(
            <div>
                <p>My name is {this.state.name} and I am {this.state.age} years old.</p>
            </div>
        )
    }
}

export default App;
