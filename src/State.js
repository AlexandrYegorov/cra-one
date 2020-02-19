import React, { useState } from 'react';
function State(props) {
    const [count, setCount] = useState(3);


    //let count = 3;

    const countChangePlusHandler = () =>{
        setCount(count + 1);
        console.log('change + ')
    };
    const countChangeMinusHandler = () =>{
        setCount(count - 1);
        console.log('change -')
    };

    return (
            <div>
                <button onClick={countChangeMinusHandler}>-</button>
                {count}
                <button onClick={countChangePlusHandler}>+</button>
            </div>
    );
}

export default State;
