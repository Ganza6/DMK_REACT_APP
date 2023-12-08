import { State } from "../../../Models/StateModel";

const selectReviewSlice = (state: State) => state.review;

export const selectReviewById = (state: State, id: string) =>
    selectReviewSlice(state).entities[id];
