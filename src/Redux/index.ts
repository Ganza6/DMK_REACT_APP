import { configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./entities/dish";
import { restarauntSlice } from "./entities/restaraunt";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { api } from "./services/api";

const store = configureStore({
    reducer: {
        restaraunt: restarauntSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
console.log(store.getState(), "store");
console.log(dishSlice, "dishSlice");
console.log("api.reducerPath", [api.reducerPath]);
console.log("api.reducer", api.reducer);
console.log("store", store);
