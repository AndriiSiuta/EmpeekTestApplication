import {
  createEntityAdapter,
  EntityAdapter,
  EntityState
} from "@ngrx/entity";
import {CommentsModel} from "./types/comments.model";
import {Action} from "@ngrx/store";
import {
  AddItem,
  ChangeComment,
  DeleteItem
} from "@empeek/common/store/comments/comments.actions";

export interface CommentsState extends EntityState<CommentsModel> {}

export const adapter: EntityAdapter<CommentsModel> = createEntityAdapter<CommentsModel>();

export const initialState: CommentsState = adapter.getInitialState();

export function commentsReducer(state = initialState, action: Action) {
  if (action instanceof AddItem) {
    return adapter.addOne(action.payload, state);
  }

  if (action instanceof DeleteItem) {
    return adapter.removeOne(action.payload, state);
  }

  if (action instanceof ChangeComment) {
    return adapter.updateOne({
      id: action.payload.id,
      changes: action.payload.changes
    }, state);
  }
  return state;
}
