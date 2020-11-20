// import * as firebase from 'firebase/app';
// import 'firebase/auth';

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../../features/UserSlice";
// import { appReducer } from "../../features/AppSlice";



export default configureStore({
    reducer: {
        user: userSlice,
        // app: appReducer,
    },
});