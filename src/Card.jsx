import { useState, userState } from 'react'


function Card({name, description}){

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <button onClick={() => setCount(count+1)}>Add {name} to cart</button>
            <button onClick={() => setCount(0)}>Remove all from cart</button>
            <p>Total {name}: {count}</p>
        </div>
    )
}

export default Card

