import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class ThePage extends Component {
  render() {
    const {theParam} = this.props.match.params
    return (
      <div>
        <h1>This page is about {theParam}</h1>
        <Link to="/">Go to home page</Link>
      </div>
    )
  }
}


// import React from 'react'

// function ThePage({ match }) {
//     const name = match.params.theParam;
//     console.log(name)
  
//     return <h3>I'm {name}</h3>;
//   }

// export default ThePage;
