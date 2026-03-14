import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Delete({data, setdata}) {

    const navigate = useNavigate()

    const [deleted, setdeleted] = useState("pause")


    const { id } = useParams();
    
    const user = data.find((u) => u.id === Number(id));

    const deleteuser = () => {
        const exist = data.some((item) => item.id === Number(id))

        if(exist) {
            const newdata = data.filter((item) => item.id !== user.id)
            setdata(newdata)
            setdeleted("success")
            setTimeout(() => navigate("/userlist"), 2000);
            ////navigate("/userlist")
        }
        else setdeleted("error")

}



    return (
        <>
         {deleted === "error" && <div class="alert alert-warning" role="alert">
            <strong>Delete failed</strong>
        </div>}
         {deleted === "success" && <div class="alert alert-success" role="alert">
            <strong>Delete success</strong>
        </div>}
        {deleted !== "success" && (<>
        <h1>Do you want to delete this user</h1>
        <div className="alert alert-danger" role="alert">
            <strong>Deletion is irreversible ( You cant go back! )</strong>
        </div>
        <button type="button" onClick={deleteuser} className="btn btn-danger">DELETE</button>
        </>) }

        {deleted !== "success" && <button type="button" onClick={() => navigate("/userlist")} className="btn btn-secondary">
        CANCEL (GO BACK)
        </button>}
        
        
        </>
    )
}