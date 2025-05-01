import { SET_DINE_TYPE } from "../actionTypes/dine-type"
export const ChangeDineType = (dineType) => {
    return {
        type: SET_DINE_TYPE,
        payload: dineType,
    }
}