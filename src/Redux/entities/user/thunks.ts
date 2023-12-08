import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_ADDRESS } from "../../../Constants/serverAddress";

export const getUsers = createAsyncThunk("getUsers", async () => {
    const result = await fetch(SERVER_ADDRESS + "/users/");
    return result.json();
});
