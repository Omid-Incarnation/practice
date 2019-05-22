import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Child from './Child';

export default class Mother extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/newPath/01">Path 01</Link></li>
                    <li><Link to="/newPath/02">Path 02</Link></li>
                    <li><Link to="/newPath/03">Path 03</Link></li>
                    <li><Link to="/newPath/04">Path 04</Link></li>
                </ul>
                
                <Route path={`/newPath/:path`} component={Child} />
            </div>
        )
    }
}
