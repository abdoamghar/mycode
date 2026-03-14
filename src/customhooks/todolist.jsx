

import Itemslist from "../hooks/usefetch"

export default function Userlist() {

    const [todos, error] = Itemslist("https://jsonplaceholder.typicode.com/todos")

    return (
        <div>
            <h1>Todo List</h1>
            {error && <p>Error: {error.message}</p>}
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}