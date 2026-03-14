import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusersrequest, fetchuserssuccess, fetchusersfailure, add } from "./reducer";

const UserList = () => {
    
    const dispatch = useDispatch(); ///// This is how you send actions to the Redux store

///// These three lines are how you read the state from the Redux store
const data = useSelector((state) => state.data);
const loading = useSelector((state) => state.loading);
const error = useSelector((state) => state.error);

const addNewUser = () => { //// This function will be called when you want to add a new user
        const newUser = { id: Date.now(), name: "abdelhamid" };
        
        // You send the 'newUser' object as the payload
        dispatch(add(newUser)) /// This will call the 'add' reducer in the userslice, which will add the new user to the data array in the Redux store, and trigger a re-render to show the updated list of users.
    };

  useEffect(() => { ///// This useEffect will run once when the component mounts, and it will fetch the users from the server

    const fetchData = async () => {
        /// Step 1: Tell the Reducer that we are starting to fetch data
        dispatch(fetchusersrequest()) /// This will set the loading state to true in the Redux store, which will trigger a re-render and show the "Loading..." message to the user.;

         try {
            // Step 2: Make the server call
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()

            // Step 3: Send the server data to the Reducer
            dispatch(fetchuserssuccess(data)) /// This will set the loading state to false and update the data state with the fetched users in the Redux store, which will trigger a re-render and show the list of users to the user.
        } catch (error) {
            // Step 4: If it fails, send the error to the Reducer
            dispatch(fetchusersfailure(error.message))
        }
    };

    fetchData(); ///// We call the function we just created to start the process

  }, [dispatch]);

  // Handle the "Loading" state first
  if (loading) return <h1>Loading... Please wait</h1>;

  // Handle the "Error" state second
  if (error) return <h1 style={{color: 'red'}}>Error: {error}</h1>;

  // Now it's safe to map because 'data' is the array []
  return ( <>
    <h1>Users List</h1>
    <button onClick={addNewUser}>Add New User</button>
    <ul>
      {data && data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  );
};

export default UserList;