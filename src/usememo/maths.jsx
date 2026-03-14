import { useMemo, useState } from "react"
export default function Maths() {


    const expensivecalcul = (value) => {
        for(let i = 0; i < 1000; i++){
            value++
        }
        return value
    }

    const [num, setnum] = useState(0)


    const calculate = useMemo ( () => {

        console.log("calculating...")

        return <h1>{expensivecalcul(num)}</h1>
    },[num])

   


    return (
        <div>
            {calculate}
            <button className="btn btn-primary" onClick={() => setnum(num + 1)}>add</button>
        </div>
    )
}