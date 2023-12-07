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
    entities: customMap<T>;
    ids: Array<string>;
}
