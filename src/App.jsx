import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userlist from "./hooks/users/userlist";
import Nav from "./hooks/users/nav";
import Adduser from "./hooks/users/adduser";
import { useState } from "react";
import Delete from "./hooks/users/delete";

export default function App() {

  const [data, setData] = useState([
      {
          id: 1,
          fullName: "John Doe",
          country: "USA"
      },
      {
          id: 2,
          fullName: "Jane Smith",
          country: "Canada"
      }
  ])

return (



  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Nav />}>
    <Route path="adduser/:id" element={<Adduser data={data} setdata={setData}/>} />
    <Route path="adduser" element={<Adduser data={data} setdata={setData}/>} />
    <Route path="userlist" element={<Userlist data={data} setdata={setData}/>} />
    <Route path="userlist/deletion/:id" element={<Delete data={data} setdata={setData} />} />
    </Route>
  </Routes>
  </BrowserRouter> 



  ///<Apppage />
  ///<Userlist />

)
}