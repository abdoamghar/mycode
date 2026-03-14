import { useCallback } from "react"

export default function Maths() {

    const a = 500
    const b = 1399

   
    const handleclick = useCallback (() =>  {
        let result = a + b
        console.log(result)
        return result
    }, [a, b])


    return (
        <div>
            <button className="btn-primary btn" onClick={handleclick}>calculate</button>
        </div>
    )
}