import { HomeComponent } from './preguntas/home/home.component';
import { PorCapitalComponent } from './preguntas/por-capital/por-capital.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorBanderaComponent } from './preguntas/por-bandera/por-bandera.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'capital',
    component:PorCapitalComponent
  },
  {
    path:'bandera',
    component:PorBanderaComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
