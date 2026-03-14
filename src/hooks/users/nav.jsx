import { Link, Outlet } from "react-router-dom";

export default function Nav() {
    return (
        <>
        <nav style={{backgroundColor: "lightblue", padding: "10px"}}>
            <ul className="nav-list" style={{listStyle: "none", display: "flex", gap: "20px"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/adduser">Add User</Link></li>
                <li><Link to="/userlist">User List</Link></li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}