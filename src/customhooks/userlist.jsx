
import usefetch from './hooks/usefetch'

export default function Userlist() {
    const [users, error] = usefetch("https://jsonplaceholder.typicode.com/users")
    
        return (
            <div>
                <h1>User List</h1> 
                {error && <p>Error: {error.message}</p>}
                <ul>
                    {users.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }