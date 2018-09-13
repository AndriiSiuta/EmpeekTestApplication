import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemComponent {
  @Input() item: any;
  @Output() deleteItem = new EventEmitter<any>();

  emitDeleteItem(id: any) {
    this.deleteItem.emit(id.toString());
  }
}
