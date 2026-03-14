import { useEffect, useRef, useState } from "react"

export default function Form() {


    const inputname = useRef()
    const inputage = useRef()
    const inputcountry = useRef()
    const inputaccept = useRef()


    const [formvalues, setformvalues] = useState({
        name: "",
        date: "",
        country: "",
        accept: false
    })

    const handlechange = (e) => {
        const myid = e.currentTarget.id
        const value = e.currentTarget.value
        setformvalues((prevstate) => {
            return {...prevstate, ...{[myid]: value}}
        })
    }

    function printdata(e) {
        e.preventDefault()
        setformvalues({
        name: inputname.current.value,
        date: inputage.current.value,
        country: inputcountry.current.value,
        accept: inputaccept.current.value
        })

        inputname.current.style.color = "red"
    }

    useEffect(() => {
        inputname.current.value = "abdelhamid"
        inputage.current.value = new Date().toISOString().substring(0,10)
        inputname.current.focus()

    }, [])



    return <div className="container">
    <form>
    {new Date().toLocaleString()}
        {JSON.stringify(formvalues)}
        <div className="form-group">
            <label>Name</label>
            <input type="text" id="name" className="form-control" ref={inputname}/>
        </div>

        <div className="form-group">
            <label>Age</label>
            <input type="date" id="age" className="form-control" ref={inputage} />
        </div>

        <div className="form-group">
            <label className="form-check-label">Country</label>
            <select className="form-control" id="country" ref={inputcountry}>
                <option value="ma">maroc</option>
                <option value="dz">algerie</option>
                <option value="tn">tunisia</option>
                <option value="other">other</option>
            </select>
        </div>

        <div className="form-check">
            <label htmlFor="accept" className="form-check-label">Accept our rules</label>
            <input type="checkbox" id="accept" className="form-check-input" ref={inputaccept} />
        </div>

        <div className="form-group">
            <button onClick={printdata} className="btn btn-primary">Save</button>
        </div>
    </form>
    </div>
}