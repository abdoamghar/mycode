import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <nav className="navbar navbar-light bg-light">
        <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className="nav-link" to="/home">home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/blogs">blogs</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/contact">contact</Link>
        </li>
    </ul>
    </nav>

    <div className="container-fluid w-75 mx-auto">
        <Outlet />
    </div>




    </>
  )
}