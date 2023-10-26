import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {logowanieComponent} from "./logowanie/logowanie.component";

const routes: Routes = [
  { path: 'logowanie', component: logowanieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
