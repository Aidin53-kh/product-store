import { FilterQueryStrings } from "../../pages/archive/types";

export enum ActionTypes {
    GET_FILTER = "GET_FILTER",
    SET_FILTER = "SET_FILTER",
    CLEAR_FILTER = "CLEAR_FILTER",
}

interface GetFilter {
    type: ActionTypes.GET_FILTER;
    payload: object;
}

interface SetFilter {
    type: ActionTypes.SET_FILTER;
    payload: object;
}

interface ClearFilter {
    type: ActionTypes.CLEAR_FILTER;
    payload: object;
}

export type Action = GetFilter | SetFilter | ClearFilter;


export const FILTER_INITIAL_VALUES: FilterQueryStrings = {
    sort: "",
    page: 1,
    startPrice: null,
    endPrice: null,
    onlyWithImage: false,
    onlyWithPrice: false,
    search: "",
};

export const MAIN_FILTER_PROPERTYS = Object.keys(FILTER_INITIAL_VALUES);
