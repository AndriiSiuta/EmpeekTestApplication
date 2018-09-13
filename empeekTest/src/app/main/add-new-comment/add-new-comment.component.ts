import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from "@angular/core";

@Component({
  selector: 'add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddNewCommentComponent implements OnChanges {
  @Input() activeItem: any;
  @Output() updateComments = new EventEmitter<any>();
  oldComments: any;
  newComment: string;

  ngOnChanges() {
    this.oldComments = this.activeItem.comments;
  }

  emitComment(e) {
    let newComments = [];
    if (e.ctrlKey && e.keyCode === 13) {
      newComments = [...this.oldComments, e.target.value];

      this.updateComments.emit({
        id: this.activeItem.id,
        changes: {
          comments: newComments,
          commentsCount: ++this.oldComments.length
        }
      });

      this.newComment = '';
    }
  }
}
