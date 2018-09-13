import {localStorageSync} from "ngrx-store-localstorage";
import {ActionReducer} from "@ngrx/store";

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['comments'],
    rehydrate: true,
    removeOnUndefined: true
  })(reducer)
}
