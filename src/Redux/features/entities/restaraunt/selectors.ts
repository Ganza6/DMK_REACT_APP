import { RestarauntNormalized } from "../../../../Models/NormalizedModels";
import { State } from "../../../../Models/StateModel";
import { getRandomInt } from "../../../../Services/Utilities";

const selectRestarauntSlice = (state: State) => state.restaraunt;

export const selectRestarauntIds = (state: State): Array<string> => {
    return selectRestarauntSlice(state).ids;
};

export const selectRestarauntById = (
    state: State,
    id: string
): RestarauntNormalized => {
    return selectRestarauntSlice(state).entities[id];
};

export const selectRandRestarauntId = (state: State): string =>
    selectRestarauntSlice(state).ids[
        getRandomInt(0, selectNumberOfRestoraunt(state))
    ];

const selectNumberOfRestoraunt = (state: State): number => {
    return selectRestarauntIds(state).length;
};
