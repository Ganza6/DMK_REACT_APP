import { configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./entities/dish";
import { restarauntSlice } from "./entities/restaraunt";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";

const store = configureStore({
    reducer: {
        restaraunt: restarauntSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;
export type AppDispatch = typeof store.dispatch;
console.log(store.getState(), "store");
console.log(dishSlice, "dishSlice");
