import { createSlice } from "@reduxjs/toolkit";
import { ReviewNormalized } from "../../../Models/NormalizedModels";
import { customMap } from "../../../Models/utility/CustomMapModel";
import { getRestarauntReviews } from "./thunks";
import { requestStatus } from "../../../Models/StateModel";

export const reviewSlice = createSlice({
    name: "review",
    initialState: {
        entities: {},
        requestStatus: requestStatus.EMPTY,
        ids: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRestarauntReviews.pending, (state) => {
            console.log("extraReducers", "ожидание");
            state.requestStatus = requestStatus.PENDING;
        }),
            builder.addCase(getRestarauntReviews.rejected, (state) => {
                console.log("extraReducers", "сервер");
                state.requestStatus == requestStatus.ERROR;
            }),
            builder.addCase(
                getRestarauntReviews.fulfilled,
                (state, { payload }) => {
                    (state.requestStatus = requestStatus.READY),
                        (state.entities = payload.reduce(
                            (
                                acc: customMap<ReviewNormalized>,
                                dish: ReviewNormalized
                            ) => {
                                acc[dish.id] = dish;
                                return acc;
                            },
                            state.entities
                        )),
                        (state.ids = payload.map(
                            (el: ReviewNormalized) => el.id
                        ));
                }
            );
    },
});
