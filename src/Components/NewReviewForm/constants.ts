import { IReview } from "../Models";

export const STEP_RATE: number = 0.5;
export const MAX_RATE_VALUE: number = 5;
export const MIN_RATE_VALUE: number = 0;
export const DEFAULT_FORM_VALUE: IReview = {
    text: "",
    user: "",
    rating: 0,
    id: "1",
};
