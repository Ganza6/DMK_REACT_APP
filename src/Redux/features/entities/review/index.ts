import { createSlice } from "@reduxjs/toolkit";
import { ReviewNormalized } from "../../../../Models/NormalizedModels";
import { customMap } from "../../../../Models/utility/CustomMapModel";
import { normalizedReviews } from "../../../../mock/normalized-mock";

export const reviewSlice = createSlice({
    name: "review",
    initialState: {
        entities: normalizedReviews.reduce(
            (acc: customMap<ReviewNormalized>, review: ReviewNormalized) => {
                acc[review.id] = review;
                return acc;
            },
            {}
        ),
        ids: normalizedReviews.map(({ id }) => id),
    },
    reducers: {},
});
