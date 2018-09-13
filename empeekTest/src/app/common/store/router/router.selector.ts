import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";

export const getRouterState = createFeatureSelector(
  'router'
) as MemoizedSelector<any, any>;

export const getQueryParams = createSelector(
  getRouterState,
  (state) => state.state.root['queryParams']
);
