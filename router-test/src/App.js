import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
// import Users from './components/Users';
// import ThePage from './components/ThePage'


// Develop Branch
// import Child from './components/Child';
import Mother from './components/Mother';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path='/' component={Users}/>
                <Route exact path="/users/:theParam" component={ThePage}/> */}

                <Route exact path='/' component={Mother}/>
                <Route path="/newPath" component={Mother}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
