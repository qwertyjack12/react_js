import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
      }
    
      function decrement() {
        setCount(count - 1)
      }

    return(
        <div>
            <h1>Count of days without coffee: {count}</h1>
            <button onClick={increment}>Plus one</button>
            <button onClick={decrement}>Minus one</button>
        </div>
    )
}

export default Counter