import React, {Component} from 'react';
import './App.css';

const MyContext = React.createContext()

class MyProvider extends Component {
    state = {
        name: "Omid",
        age: 30,
        cool: true
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                growAYearOlder: () => this.setState({
                  age: this.state.age + 1
                })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

const Family = (props) => (
    <div className="family">
        <Person/>
    </div>
)

class Person extends Component {
    render() {
        return (
            <div className="person">
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>I am {context.state.name}
                                <br/>
                                and {context.state.age}
                                years old!
                            </p>
                            <button onClick={context.growAYearOlder}>get Oldr</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <MyProvider>
                <div className="App">
                    <h1>I am the App</h1>
                    <Family/>
                </div>
            </MyProvider>
        );
    }
}

export default App;
