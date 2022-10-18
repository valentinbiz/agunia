import USER_ACTION_TYPE from "./UserTypes";
import { createAction } from "../../Utils/Reducer/ReducerUtils";

export const setCurrentUser = (user) => {
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
}