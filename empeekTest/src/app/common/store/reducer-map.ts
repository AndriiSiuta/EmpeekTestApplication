import {commentsReducer} from "./comments/comments.reducer";
import {routerReducer} from "@ngrx/router-store";

export const reducerMap = {
  comments: commentsReducer,
  router: routerReducer
};
