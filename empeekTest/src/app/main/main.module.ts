import {NgModule} from "@angular/core";
import {
  ItemComponent,
  ItemsContainer
} from "./items";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {
  CommentItemComponent,
  CommentsContainer
} from "./comments";
import {MainContainer} from "./containers/main.container";
import {RouterModule} from "@angular/router";
import {mainRoutes} from "./main.routes";
import {AddNewItemComponent} from "./add-new-item/add-new-item.component";
import {CommonModule} from "@angular/common";
import {AddNewCommentComponent} from "./add-new-comment/add-new-comment.component";
import {FormsModule} from "@angular/forms";

const components = [
  SidebarComponent,
  CommentItemComponent,
  ItemComponent,
  AddNewItemComponent,
  AddNewCommentComponent
];

const containers = [
  MainContainer,
  CommentsContainer,
  ItemsContainer
];

@NgModule({
  declarations: [
    ...containers,
    ...components
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})

export class MainModule {}
