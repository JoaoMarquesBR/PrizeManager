import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './components/views/item-page/item-page.component';
import { GroupsPageComponent } from './components/views/groups-page/groups-page.component';

const routes: Routes = [
  { path: "prizes", component: ItemPageComponent },
  { path: "groups", component: GroupsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
