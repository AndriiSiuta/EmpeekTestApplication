import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges
} from "@angular/core";

@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommentItemComponent implements OnChanges {
  @Input() comment: any;
  comments: string[] = [];

  ngOnChanges() {
    console.log('comment', this.comment);

    this.comments = this.comment.comments;
  }
}
