import React from "react";

function App(){
    return(
        <div>
            <img src="http://placehold.jp/150x50.png"></img>
            <br />
            <br />
            <button onClick={() => {console.log("I clicked!")}}>Click me!</button>
        </div>
    )
}

export default App;