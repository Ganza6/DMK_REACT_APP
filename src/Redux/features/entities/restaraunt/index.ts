import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../mock/normalized-mock";
import { RestarauntNormalized } from "../../../../Models/NormalizedModels";
import { customMap } from "../../../../Models/utility/CustomMapModel";

export const restarauntSlice = createSlice({
    name: "restaraunt",
    initialState: {
        entities: normalizedRestaurants.reduce(
            (
                acc: customMap<RestarauntNormalized>,
                restaraunt: RestarauntNormalized
            ) => {
                acc[restaraunt.id] = restaraunt;
                return acc;
            },
            {}
        ),
        ids: normalizedRestaurants.map(({ id }) => id),
    },
    reducers: {},
});
