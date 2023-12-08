import { State } from "../../../Models/StateModel";

const selectDishSlice = (state: State) => state.dish;

export const selectDishById = (state: State, id: string) =>
    selectDishSlice(state).entities[id];
