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
            const currentResrarauntSliceStatus = selectRestarauntsRequestStatus(
                getState() as State
            );
            return (
                currentResrarauntSliceStatus === requestStatus.EMPTY ||
                currentResrarauntSliceStatus === requestStatus.ERROR
            ); // запрашиваем ресторан, только если случилась ошибка или слайс пустой
        },
    }
);
