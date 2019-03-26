import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Header username='Omid'/>
                <Greeting/>
            </div>
        )
    }

}

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends Component {
    render() {
        const date = new Date();
        const hours = date.hours();
        let timeOfDay

        if (hours < 12) {
            timeOfDay = 'morning'
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = 'afternoon'
        } else {
            timeOfDay = 'night'
        }

        return (
            <h2>Good {timeOfDay}
                to you, Sir or Madam :)</h2>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'));