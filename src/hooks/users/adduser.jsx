import { use, useEffect, useRef, useState } from "react"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"

export default function Adduser({data, setdata}) {

    const navigate = useNavigate()

    const { id } = useParams();
    const userid = data.find((u) => u.id === Number(id));

    const [idfound, setidfound] = useState(true)



    const fullname = useRef()
    const country = useRef()

    const iduser = data.length + 1 


const adduser = (e) => {
    e.preventDefault()

    if(id) {
         if(userid.id !== null) {
            const newdata = data.map((user) => {
            if(user.id === Number(userid.id)) {
                return {...user, fullName: fullname.current.value, country: country.current.value}
            }
            return user
            
        })

         setdata(newdata)
         navigate("/userlist")

        }
    }

    else {
         const newUser = {
        id: iduser,
        fullName: fullname.current.value,
        country: country.current.value
    }


    setdata([...data, newUser])

    fullname.current.value = ""
    country.current.value = ""  

    navigate("/userlist")

}
    }
    
   



    return (<>
    
    <form onSubmit={adduser} style={{maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px"}}>
        <div>
            <label htmlFor="id">ID:</label>
            <span className="form-control">{!id ? iduser : userid.id}</span>
        </div>
        <div>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" defaultValue={id ? userid.fullName : ""} ref={fullname} className="form-control" />
        </div>
        <div>
            <label htmlFor="country">Country:</label>
            <select defaultValue={id ? userid.country : "MA"} ref={country} className="form-control">
                <option value="MA">Morocco</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
            </select>
        </div>
        <button type="submit" className="btn btn-success mt-3">{id ? "update user" : "add user"}</button>
        
    </form>

    
    </>)
}