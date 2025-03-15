import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice.js';
import postsReducer from './postsSlice.js';

const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
    },
});

export default store;