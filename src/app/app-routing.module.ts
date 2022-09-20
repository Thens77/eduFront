import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalleListComponent } from './entities/salle/list/list.component';
import { SalleUpdateComponent } from './entities/salle/update/update.component';

const routes: Routes = [
  {path:"salles" , component :  SalleListComponent },
  {path:"ajouter" , component :  SalleUpdateComponent } ,
  {path: 'salle/:id', component: SalleUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
