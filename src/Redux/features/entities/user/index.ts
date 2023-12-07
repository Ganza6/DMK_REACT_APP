import { createSlice } from "@reduxjs/toolkit";
import { UserNormalized } from "../../../../Models/NormalizedModels";
import { customMap } from "../../../../Models/utility/CustomMapModel";
import { normalizedUsers } from "../../../../mock/normalized-mock";

export const userSlice = createSlice({
    name: "review",
    initialState: {
        entities: normalizedUsers.reduce(
            (acc: customMap<UserNormalized>, user: UserNormalized) => {
                acc[user.id] = user;
                return acc;
            },
            {}
        ),
        ids: normalizedUsers.map(({ id }) => id),
    },
    reducers: {},
});
