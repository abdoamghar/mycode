
import { useContext } from 'react';
import { HomeContext } from './home'; 

export default function Card({username, email}) {
    const darkmode = useContext(HomeContext);
  return (
    <div className={`card container text-center mt-5 p-5 rounded shadow ${darkmode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <h1>{username}</h1>
        <p>{email}</p>
    </div>
  )
}