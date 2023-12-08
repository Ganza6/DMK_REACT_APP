import { createSlice } from "@reduxjs/toolkit";
import { RestarauntNormalized } from "../../../Models/NormalizedModels";
import { customMap } from "../../../Models/utility/CustomMapModel";
import { getRestaraunts } from "./thunks";
import { requestStatus } from "../../../Models/StateModel";

export const restarauntSlice = createSlice({
    name: "restaraunt",
    initialState: {
        entities: {},
        requestStatus: requestStatus.EMPTY,
        ids: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRestaraunts.pending, (state) => {
            console.log("extraReducers", "ожидание");
            state.requestStatus = requestStatus.PENDING;
        }),
            builder.addCase(getRestaraunts.rejected, (state) => {
                console.log("extraReducers", "сервер");
                state.requestStatus = requestStatus.ERROR;
            }),
            builder.addCase(getRestaraunts.fulfilled, (state, { payload }) => {
                (state.requestStatus = requestStatus.READY),
                    (state.entities = payload.reduce(
                        (
                            acc: customMap<RestarauntNormalized>,
                            restaraunt: RestarauntNormalized
                        ) => {
                            acc[restaraunt.id] = restaraunt;
                            return acc;
                        },

                        {}
                    ));
                state.ids = payload.map((el: RestarauntNormalized) => el.id);
            });
    },
});
