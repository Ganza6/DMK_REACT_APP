import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_ADDRESS } from "../../../Constants/serverAddress";
import { selectRestarauntsRequestStatus } from "./selectors";
import { State, requestStatus } from "../../../Models/StateModel";

export const getRestaraunts = createAsyncThunk(
    "getRestaraunts",
    async () => {
        const result = await fetch(SERVER_ADDRESS + "/restaurants/");
        return result.json();
    },
    {
        condition: (_, { getState }) => {
            return true; //!selectRestarauntsRequestStatus(getState() as State); // запрашиваем пользователей, только если
        },
    }
);
