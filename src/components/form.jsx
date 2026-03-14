import { useState } from "react"

export default function Form() {

    const [name, setname] = useState("")
    const [age, setage] = useState(0)

    const handlename = () => {

        const name = document.querySelector("#name").value
        const age = document.querySelector("#age").value
        setname(name)
        setage(age)
    }

    function handlesubmit(e) { 
        e.preventDefault()
        console.log({
            name,
            age
        })
    }


    return (
    <>
        <form onSubmit={handlesubmit}>
           <input type="text" id="name" placeholder="name" onChange={handlename} />
           <input type="number" id="age" placeholder="age" onChange={handlename} />
           <input type="submit" value="submit" />
        </form>
    </>
    )
}