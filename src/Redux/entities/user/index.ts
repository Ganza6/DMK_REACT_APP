import { createSlice } from "@reduxjs/toolkit";
import { UserNormalized } from "../../../Models/NormalizedModels";
import { customMap } from "../../../Models/utility/CustomMapModel";
import { getUsers } from "./thunks";
import { requestStatus } from "../../../Models/StateModel";

export const userSlice = createSlice({
    name: "review",
    initialState: {
        entities: {},
        requestStatus: requestStatus.EMPTY,
        ids: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            console.log("extraReducers", "ожидание");
            state.requestStatus = requestStatus.PENDING;
        }),
            builder.addCase(getUsers.rejected, (state) => {
                console.log("extraReducers", "сервер");
                state.requestStatus = requestStatus.ERROR;
            }),
            builder.addCase(getUsers.fulfilled, (state, { payload }) => {
                (state.requestStatus = requestStatus.READY),
                    (state.entities = payload.reduce(
                        (
                            acc: customMap<UserNormalized>,
                            user: UserNormalized
                        ) => {
                            acc[user.id] = user;
                            return acc;
                        },
                        {}
                    ));
                state.ids = payload.map((user: UserNormalized) => user.id);
            });
    },
});
