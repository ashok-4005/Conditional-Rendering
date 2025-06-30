 import React from 'react'
 import './App.css'
 
 const Joke = (props) =>{

    const [isShown,setShown] = React.useState(false)

    const toggle = () =>{
        setShown(prev =>  !prev)
    }


    return (
        <div className="main">
            {props.setup && <h3>{props.setup}</h3>}
            {isShown  && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown?"Hide Answer":"Show Answer"}</button>
            {/* <hr /> */}
        </div>
    );
 };

 export {Joke};