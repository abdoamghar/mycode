
import { usereducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: usereducer
})

export default store;