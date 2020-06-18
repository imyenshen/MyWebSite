import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Item1Component } from './items/item1/item1.component';
import { Item2Component } from './items/item2/item2.component';


const routes: Routes = [
  { path:"item1", component : Item1Component},
  { path:"item2", component : Item2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
