import { useState } from "react";

const EventHandling = () => {

    let c = 20;
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // c++;
        // console.log(c);

        setCount(count + 1);
    }

    return (
        <div>
            <h1>{c}</h1>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={handleClick}>Don't touch</button>
        </div>
    )
}

export default EventHandling;