import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_ADDRESS } from "../../../Constants/serverAddress";
import { selectRestarauntMenu } from "../restaraunt/selectors";
import { State } from "../../../Models/StateModel";
import { selectDishById } from "./selectors";

export const getRestarauntDishes = createAsyncThunk(
    "getRestarauntDishes",
    async (restarauntId: string) => {
        const result = await fetch(
            SERVER_ADDRESS + "/dishes?restaurantId=" + restarauntId
        );
        return result.json();
    },
    {
        condition: (restarauntId, api) => {
            const dishesId = selectRestarauntMenu(
                api.getState() as State,
                restarauntId
            );
            return dishesId.some((dishId) => {
                console.log(
                    "есть ли незагруженные блюда",
                    api.getState(),
                    dishId,
                    selectDishById(api.getState() as State, dishId)
                );
                return !selectDishById(api.getState() as State, dishId); // если есть хотя бы одно незагруженное блюдо, то делаем запрос
            });
        },
    }
);
