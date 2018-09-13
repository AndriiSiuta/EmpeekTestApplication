import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import {
  checkIfNotEqual,
  generateId
} from "../items/utility/generate-id";

@Component({
  selector: 'add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddNewItemComponent {
  newItem: string;
  generateItemId: number;
  @Input() idList: number[];
  @Output() createdItem = new EventEmitter<any>();

  getNewItem(value: string) {
    this.newItem = value;
  }

  addNewItem() {
    let newItemId;
    this.generateItemId = generateId();

    if (this.idList.length === 0) {
      newItemId = this.generateItemId;
    } else {
      newItemId = checkIfNotEqual(this.idList, this.generateItemId);
    }

    this.createdItem.emit({
      id: newItemId,
      title: this.newItem,
      commentsCount: 0,
      comments: []
    });

    this.newItem = '';
  }
}
