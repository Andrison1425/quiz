import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorBanderaComponent } from './por-bandera/por-bandera.component';
import { HomeComponent } from './home/home.component';
import { LetraPipePipe } from './pipes/letra-pipe.pipe';



@NgModule({
  declarations: [PorCapitalComponent, PorBanderaComponent, HomeComponent, LetraPipePipe],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    PorBanderaComponent,
    PorCapitalComponent,
    HomeComponent
  ]
})
export class PreguntasModule { }
