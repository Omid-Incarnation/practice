import React, {Component} from 'react'
import Data from './Data'
import {Link} from "react-router-dom"

export default class Users extends Component {
    state = {
        data: Data
    }

    render() {
        const listOfuser = this
            .state
            .data
            .map(({id, name}) => {
                return <li key={id}>
                    <Link to={`/users/${name}`}>User name is : {name}</Link>
                </li>
            })
        return (
            <div>
                <ul>
                    {listOfuser}
                </ul>
            </div>
        )
    }
}
