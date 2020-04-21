import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountBashboardComponent} from "./account-bashboard/account-bashboard.component";

const routes: Routes = [
  {path: '', component: AccountBashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
