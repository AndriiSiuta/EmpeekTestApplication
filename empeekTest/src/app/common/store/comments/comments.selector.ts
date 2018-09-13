import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";
import {
  adapter,
  CommentsState
} from "./comments.reducer";

export const getCommentsSelector = (thisSelector: MemoizedSelector<any, CommentsState>) => {
  return adapter.getSelectors(thisSelector);
};

export const getCommentsState = createFeatureSelector(
  'comments'
) as MemoizedSelector<any, CommentsState>;

export const {
  selectAll: getAllItems,
  selectIds: getAllItemsId
} = getCommentsSelector(getCommentsState);

export const getCommentById = (id: number) => createSelector(
  getCommentsState,
  state => state.entities[id]
);
