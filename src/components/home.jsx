import { useState } from "react"

export default function Home({initialvalue, step}) {

    const [time, settime] = useState(initialvalue)

    function start() {
        settime((prevtime) => prevtime + step)
        
    }


    return (
        <>
        <button onClick={start}>add time</button>
        <h1>{time}</h1>
        <button onClick={() => settime(initialvalue)}>reset</button>
        </>
    )
}