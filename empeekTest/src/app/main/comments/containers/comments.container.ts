import {
  Component,
  OnInit,
} from "@angular/core";
import {
  ActivatedRoute,
  Params
} from "@angular/router";
import {
  Observable,
} from "rxjs/index";
import {AppState} from "@empeek/common/store/types/app-state";
import {Store} from "@ngrx/store";
import {getCommentById} from "@empeek/common/store";
import {ChangeComment} from "@empeek/common/store/comments/comments.actions";

@Component({
  selector: 'comments-container',
  templateUrl: './comments.container.html',
  styleUrls: ['./comments.container.scss'],
})

export class CommentsContainer  {
  currentItem$: Observable<any>;

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.activateRoute.queryParams.subscribe((params: Params) => {
      console.log(params['itemId']);
      this.currentItem$ = this.store.select(
        getCommentById(params['itemId'])
      )
    });
  }

  addNewCommentToState(comments: any) {
    console.log('comments', comments)
    this.store.dispatch(new ChangeComment(comments));
  }
}
