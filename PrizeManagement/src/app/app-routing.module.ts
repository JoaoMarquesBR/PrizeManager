import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { GroupsPageComponent } from './components/groups-page/groups-page.component';

const routes: Routes = [
  { path: "prizes", component: ItemPageComponent },
  { path: "groups", component: GroupsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
