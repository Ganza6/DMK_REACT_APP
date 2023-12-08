import {
    DishNormalized,
    RestarauntNormalized,
    ReviewNormalized,
    UserNormalized,
} from "./NormalizedModels";
import { customMap } from "./utility/CustomMapModel";

export interface State {
    dish: SliceOfState<DishNormalized>;
    restaraunt: SliceOfState<RestarauntNormalized>;
    review: SliceOfState<ReviewNormalized>;
    user: SliceOfState<UserNormalized>;
}

interface SliceOfState<T> {
    requestStatus: requestStatus;
    entities: customMap<T>;
    ids: Array<string>;
}

export enum requestStatus {
    "PENDING" = "Ожидание",
    "READY" = "Получено",
    "ERROR" = "Ошибка",
    "EMPTY" = "Пусто",
}
