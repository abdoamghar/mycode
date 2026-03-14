import { useState } from "react"

export default function Fruitslist() {

    const [fruits, setfruits] = useState([])

    const displayfruits = () => fruits.map((fruit, index) => <li key={index}>{fruit}</li>)

    function handleinput(e) {
        e.preventDefault()
        const fruit = document.querySelector("#fruit").value
        if (fruit.trim() !== "") {
        setfruits((prevFruits) => [...prevFruits, fruit]);
      fruit.value = "";
    }
    }

    return (
        <>
        <span>
            <form onSubmit={handleinput}>
                <input type="text" id="fruit"/>
                <input type="submit" value="add fruit"/>
            </form>
        </span>
          <h1>fruits : </h1>
          <ol>
             {displayfruits()}
          </ol>
        </>

    )
}