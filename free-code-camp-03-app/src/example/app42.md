import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFirendly: true,
            gender: "",
            favColor: ""
        }

        this.handleChange = this
            .handleChange
            .bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox"
            ? this.setState({[name]: checked})
            : this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}/>
                <br/>
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}/>
                <br/>
                <textarea value={"some default text."}/>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isFirendly"
                        checked={this.state.isFirendly}
                        onChange={this.handleChange}/>
                    Is Firendly.
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}/>
                    Male
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}/>
                    Female
                </label>
                <br/>
                <label>Favorite color</label>
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor">
                    <option value="">please choose a color</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>
            </form>
        )
    }
}

export default App;

//I didn't add the submit button 4:03:33