import { FilterQueryStrings } from "../../pages/archive/types";
import { Action, ActionTypes, FILTER_INITIAL_VALUES } from "./types";

export const filtersReducer = (filters: FilterQueryStrings = FILTER_INITIAL_VALUES, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_FILTER:
            return {...action.payload};
        case ActionTypes.SET_FILTER:
            return {...action.payload};
        case ActionTypes.CLEAR_FILTER:
            return {...action.payload};
        default:
            return filters;
    }
}