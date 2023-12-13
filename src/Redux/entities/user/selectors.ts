import { State } from "../../../Models/StateModel";

const selectUserSlice = (state: State) => state.user;

export const selectUserById = (state: State, id: string) =>
    selectUserSlice(state).entities[id];

export const selectUserNameById = (state: State, id: string) =>
    selectUserById(state, id)?.name;

export const selectUsersRequestStatus = (state: State) =>
    selectUserSlice(state).requestStatus;
