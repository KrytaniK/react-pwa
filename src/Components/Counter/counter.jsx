import React, {useState, useEffect} from "react";

const C_Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }, [count]);

    return <span className="counter">{count}</span>;
};

export default C_Counter;