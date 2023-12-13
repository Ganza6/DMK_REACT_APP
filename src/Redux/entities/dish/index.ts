import { createSlice } from "@reduxjs/toolkit";
import { DishNormalized } from "../../../Models/NormalizedModels";
import { customMap } from "../../../Models/utility/CustomMapModel";
import { getRestarauntDishes } from "./thunks";
import { requestStatus } from "../../../Models/StateModel";

export const dishSlice = createSlice({
    name: "dish",
    initialState: {
        entities: {},
        requestStatus: requestStatus.EMPTY,
        ids: [] as Array<string>,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRestarauntDishes.pending, (state) => {
            console.log("extraReducers", "ожидание");
            state.requestStatus = requestStatus.PENDING;
        }),
            builder.addCase(getRestarauntDishes.rejected, (state) => {
                console.log("extraReducers", "сервер");
                state.requestStatus = requestStatus.ERROR;
            }),
            builder.addCase(
                getRestarauntDishes.fulfilled,
                (state, { payload }) => {
                    (state.requestStatus = requestStatus.READY),
                        (state.entities = payload.reduce(
                            (
                                acc: customMap<DishNormalized>,
                                dish: DishNormalized
                            ) => {
                                acc[dish.id] = dish;
                                return acc;
                            },
                            state.entities // пополнять блюда, а не зачищать их
                        )),
                        (state.ids = [
                            ...state.ids,
                            ...payload.map((el: DishNormalized) => el.id),
                        ]);
                }
            );
    },
});
