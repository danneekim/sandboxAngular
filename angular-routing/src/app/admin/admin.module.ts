import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users/users.component";
import { RouterModule } from "@angular/router";

const routes = [{ path: "", component: UsersComponent }];

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
