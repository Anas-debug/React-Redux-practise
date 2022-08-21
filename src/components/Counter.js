import { useState } from "react";

export default function Counter(){

    const [counter, setCounter] = useState(0);


    const increment = () => {
        setCounter(prevCounter => prevCounter +  1);
    }

    return(
        <div>
            Value: {counter} <button onCLick ={increment}>Increment</button>
        </div>
    );

}