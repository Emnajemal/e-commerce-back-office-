import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackDetailsComponent } from './pack-details/pack-details.component';
import { PackListComponent } from './pack-list/pack-list.component';

const routes: Routes = [
  {
    // /pack/
    path: '', component: PackListComponent
  },
  //details/id
  { path: 'details/:id', component: PackDetailsComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackRoutingModule { }
