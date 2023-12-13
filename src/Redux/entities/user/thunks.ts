import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_ADDRESS } from "../../../Constants/serverAddress";
import { State, requestStatus } from "../../../Models/StateModel";
import { selectUsersRequestStatus } from "./selectors";

export const getUsers = createAsyncThunk(
    "getUsers",
    async () => {
        const result = await fetch(SERVER_ADDRESS + "/users/");
        return result.json();
    },
    {
        condition: (_, { getState }) => {
            const currentUsersSliceStatus = selectUsersRequestStatus(
                getState() as State
            );
            return (
                currentUsersSliceStatus === requestStatus.EMPTY ||
                currentUsersSliceStatus === requestStatus.ERROR
            ); // запрашиваем пользователей, только если случилась ошибка или слайс пустой
        },
    }
);
