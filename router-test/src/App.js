import React from 'react';
import './App.css';
import Users from './components/Users';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import ThePage from './components/ThePage'



function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Users}/>
                <Route exact path="/users/:theParam" component={ThePage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
