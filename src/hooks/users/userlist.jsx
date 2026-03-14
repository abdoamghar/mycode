import { useNavigate } from "react-router-dom"

export default function Userlist({data, setdata}) {

    const navigate = useNavigate()

    const oneddit = (e) => {
        navigate(`/adduser/${e}`)
    }

    const ondelete = (e) => {
        navigate(`deletion/${e}`)
    }


const displaydata = data.map((item) => (
    <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.fullName}</td>
        <td>{item.country}</td>
        <td>
            <button className="btn btn-danger" onClick={() => ondelete(item.id)}>Delete</button>
            <button className="btn btn-primary ms-2" onClick={() => oneddit(item.id)}>Edit</button>
            </td>

    </tr>
))

    return (<>


    <h1>User List Page</h1>

    <table className="table">
        <thead>
            <tr style={{backgroundColor: "lightgray"}}> 
                <th>ID</th>
                <th>Full Name</th>
                <th>Country</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            {displaydata}
        </tbody>
    </table>



    </>)


}
