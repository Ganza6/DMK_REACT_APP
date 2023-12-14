import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_ADDRESS } from "../../constants/serverAddress";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_ADDRESS }),
    endpoints: (builder) => ({
        getRestaraunts: builder.query({
            query: () => ({
                url: "/restaurants/",
            }),
        }),
        getRestarauntMenu: builder.query({
            query: (restaurantId) => ({
                url: "/dishes",
                params: { restaurantId },
            }),
        }),
        getRestarauntReviews: builder.query({
            query: (restaurantId) => ({
                url: "/reviews",
                params: { restaurantId },
            }),
            providesTags: (result, _, restaurantId) => {
                return result
                    .map(({ id }: { id: string }) => {
                        return { type: "Review", id: id };
                    })
                    .concat({ type: "Review", id: restaurantId });
            },
        }),
        getUsers: builder.query({
            query: () => ({ url: "/users/" }),
        }),
        postReview: builder.mutation({
            query: ({ restarauntId, newReview }) => ({
                url: `/review/${restarauntId}`,
                method: "POST",
                body: newReview,
            }),
            invalidatesTags: (_result, _, { restarauntId }) => {
                return [{ type: "Review" as never, id: restarauntId }];
            },
        }),
        getDishByid: builder.query({
            query: (dishId) => ({
                url: `/dish/${dishId}`,
            }),
        }),
        patchReview: builder.mutation({
            query: ({ reviewId, changedReview }) => ({
                url: `/review/${reviewId}`,
                method: "PATCH",
                body: changedReview,
            }),
            invalidatesTags: (_result, _, { restarauntId }) => {
                return [{ type: "Review" as never, id: restarauntId }];
            },
        }),
    }),
});

export const {
    useGetRestarauntsQuery,
    useGetRestarauntMenuQuery,
    useGetRestarauntReviewsQuery,
    useGetUsersQuery,
    usePostReviewMutation,
    useGetDishByidQuery,
    usePatchReviewMutation,
} = api;
