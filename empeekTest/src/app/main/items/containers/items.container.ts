import {
  ChangeDetectionStrategy,
  Component
} from "@angular/core";
import {AppState} from "@empeek/common/store/types/app-state";
import {Store} from "@ngrx/store";
import {
  AddItem,
  DeleteItem
} from "@empeek/common/store/comments/comments.actions";
import {
  Observable,
  combineLatest
} from "rxjs";
import {
  getAllItems,
  getAllItemsId
} from '@empeek/common/store'
import {Router} from "@angular/router";

@Component({
  selector: 'items-container',
  templateUrl: './items.container.html',
  styleUrls: ['./items.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemsContainer {
  state$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.state$ = combineLatest(
      this.store.select(getAllItems),
      this.store.select(getAllItemsId),
      (items, itemsIds) => ({items, itemsIds}))
  }

  addItemToState(item: any) {
    this.store.dispatch(new AddItem(item));
  }

  deleteItemFromState(id: string) {
    this.store.dispatch(new DeleteItem(id));
  }

  changeQueryParam(id: number) {
    this.router.navigate([''], {
      queryParams: {itemId: id},
      queryParamsHandling: 'merge'
    })
  }
}
