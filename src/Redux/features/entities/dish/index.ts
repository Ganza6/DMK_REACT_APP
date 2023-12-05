import { createSlice } from "@reduxjs/toolkit";
import { DishNormalized } from "../../../../Models/NormalizedModels";
import { customMap } from "../../../../Models/utility/CustomMapModel";
import { normalizedDishes } from "../../../../mock/normalized-mock";

export const dishSlice = createSlice({
    name: "dish",
    initialState: {
        entities: normalizedDishes.reduce(
            (acc: customMap<DishNormalized>, dish: DishNormalized) => {
                acc[dish.id] = dish;
                return acc;
            },
            {}
        ),
        ids: normalizedDishes.map(({ id }) => id),
    },
    reducers: {},
});
