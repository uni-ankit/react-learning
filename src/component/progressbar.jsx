import { useEffect, useState } from "react"

const Progressbar = () => {
    const [count, setCount] = useState([]);

    const addNewBar = () => {
        setCount((prev) => [...prev, { value: 0 }]);
    }

    return (
        <>
            <button onClick={addNewBar}>ProgressBar</button>
            {
                count.map((el, index) => {
                    return (
                        <Progress key={index} value={el.value} />
                    )
                })
            }
        </>
    )
}

export default Progressbar


// eslint-disable-next-line react/prop-types
const Progress = ({ value }) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        setAnimatedValue(value);
        const interval = setInterval(() => {
            setAnimatedValue((prev) => (prev >= 100 ? 0 : prev + 10));
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount or dependency change
    }, [value])

    return (
        <>
            <div className="progress">
                <div className="progress-bar" style={{
                    width: `${animatedValue}%`,
                    backgroundColor: animatedValue > 0 ? '#0d6efd' : ''
                }}></div>
            </div>
        </>
    )
}


