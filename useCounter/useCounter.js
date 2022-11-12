import { useState } from "react";

export const useCounter = (initalValue = 10) => {
    
    const [counter, setCounter] = useState(initalValue);
    
    const increment = (value = 1) => {
        setCounter((current) => current + value);
    }
    
    const decrement = (value = 1) => {
        // if (counter === 1) return
        setCounter((current) => current - value);
    }
    
    const reset = () => {
        setCounter(initalValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}