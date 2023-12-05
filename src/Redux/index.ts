import { configureStore } from "@reduxjs/toolkit";
import { restarauntSlice } from "./features/entities/restaraunt";
import { dishSlice } from "./features/entities/dish";
import { reviewSlice } from "./features/entities/review";
import { userSlice } from "./features/entities/user";

const store = configureStore({
    reducer: {
        restaraunt: restarauntSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;

console.log(store.getState(), "store");
console.log(dishSlice, "dishSlice");
