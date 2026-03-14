import { createSlice } from "@reduxjs/toolkit"

const initialstate = { ////initial state for users slice.
    data: [],
    loading: false,
    error: null
}


const userslice = createSlice({ ////creating users slice with name, initial state and reducers for handling different actions related to fetching users.
    name: 'users', ////name of the slice
    initialState: initialstate, ///initial state for the slice
    reducers: { ///reducers for handling different actions related to fetching users.

        fetchusersrequest: (state) => { ///reducer for handling the action of fetching users request. It sets the loading state to true.
            state.loading = true;
        },
        fetchuserssuccess: (state, action) => { ///reducer for handling the action of fetching users success. It sets the loading state to false and updates the data state with the payload of the action.
            state.loading = false;
            state.data = action.payload;
        },
        fetchusersfailure: (state, action) => { ///reducer for handling the action of fetching users failure. It sets the loading state to false and updates the error state with the payload of the action.
            state.loading = false;
            state.error = action.payload;
        },
            add: (state, action) => { ///reducer for handling the action of adding a new user. It adds the payload of the action to the data state.
            state.data.push(action.payload);
        }
    }
});

export const { fetchusersrequest, fetchuserssuccess, fetchusersfailure, add } = userslice.actions; ///exporting the actions of the slice for use in the component.

export const usereducer = userslice.reducer; ///exporting the reducer of the slice for use in the store.
