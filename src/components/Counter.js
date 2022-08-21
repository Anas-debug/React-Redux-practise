import { useState } from "react";
import React from "react";

export default function Counter(){

    const [counter, setCounter] = useState(0);


    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
    }
    const reset = () => {
        setCounter(0);
    }

    
    return(
        <div>
            Value: {counter} <button onClick={increment}>Increment</button><button onClick ={reset}>Reset</button>
        </div>
    );

}