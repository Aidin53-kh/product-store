import { Dispatch } from "redux";
import qs from "query-string";
import { isEmpty } from "lodash";
import { Action, ActionTypes, FILTER_INITIAL_VALUES, MAIN_FILTER_PROPERTYS } from "./types";

export const setQueryString = (queryString: string) => (dispatch: Dispatch<Action>) => {
    const query = qs.pick(queryString, MAIN_FILTER_PROPERTYS);
    const filters = qs.parse(query, { parseNumbers: true, parseBooleans: true });
    console.log(filters);
    
    dispatch({
        type: ActionTypes.SET_FILTER,
        payload: isEmpty(filters) ? FILTER_INITIAL_VALUES : { ...FILTER_INITIAL_VALUES, ...filters },
    });
};
