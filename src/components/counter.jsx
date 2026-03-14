import { useEffect, useState } from "react"


export default function Counter() {

    const [count, setCount] = useState(0)
    const [time, settime] = useState(new Date())

    useEffect(() => {
        console.log("count changed:", count)

}, [count])

useEffect(() => {
        console.log("every render")
        
        let timer = setInterval(() => {

            settime(new Date())
            
        }, 1000);

        return () => {
            clearInterval(timer)
        }

},[])

    return (
        <>
        <span>date: {time.toLocaleString()}</span>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}