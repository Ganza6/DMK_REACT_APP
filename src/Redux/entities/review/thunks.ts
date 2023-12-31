import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_ADDRESS } from "../../../Constants/serverAddress";
import { selectRestarauntReviews } from "../restaraunt/selectors";
import { State } from "../../../Models/StateModel";
import { selectReviewById } from "./selectors";

export const getRestarauntReviews = createAsyncThunk(
    "getRestarauntReviews",
    async (restarauntId: string) => {
        const result = await fetch(
            SERVER_ADDRESS + "/reviews?restaurantId=" + restarauntId
        );
        return result.json();
    },
    {
        condition: (restarauntId, api) => {
            const reviewsId = selectRestarauntReviews(
                api.getState() as State,
                restarauntId
            );
            return reviewsId.some((reviewId) => {
                return !selectReviewById(api.getState() as State, reviewId); // запрашиваем, если хотя бы одного из отзывов нет у нас в сторе
            });
        },
    }
);
