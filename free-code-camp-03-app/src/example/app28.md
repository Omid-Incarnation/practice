import React, {Component} from "react";


class App extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false,
        }
    }

    render(){
        let wordDisplay
        if(this.state.isLoggedIn === true){
            wordDisplay = "In"
        } else {
            wordDisplay = "Out"
        }
        return(
            <div>
                <h1>You are currently Logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default App;
