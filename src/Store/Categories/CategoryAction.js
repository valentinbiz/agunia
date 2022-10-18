import CATEGORIES_ACTION_TYPE from "./CategoryTypes";

import { createAction } from "../../Utils/Reducer/ReducerUtils";

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);