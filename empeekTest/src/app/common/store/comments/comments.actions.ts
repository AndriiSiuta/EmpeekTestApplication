import {DummyAction} from "@empeek/core/dummy-action";
import {CommentsModel} from "@empeek/common/store/comments/types/comments.model";

export class AddItem extends DummyAction {
  constructor(public payload: CommentsModel) {
    super();
  }
}

export class DeleteItem extends DummyAction {
  constructor(public payload: string) {
    super();
  }
}

export class ChangeComment extends DummyAction {
  constructor(public payload: any) {
    super();
  }
}
