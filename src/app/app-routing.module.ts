import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMatiereUpdateComponent } from './entities/form-matiere/update/update.component';
import { FormationListComponent } from './entities/formation/list/list.component';
import { FormationUpdateComponent } from './entities/formation/update/update.component';
import { MatiereListComponent } from './entities/matiere/list/list.component';
import { MatiereUpdateComponent } from './entities/matiere/update/update.component';
import { SalleListComponent } from './entities/salle/list/list.component';
import { SalleUpdateComponent } from './entities/salle/update/update.component';

const routes: Routes = [
  {path:"salles" , component :  SalleListComponent },
  {path:"ajouterSalle" , component :  SalleUpdateComponent } ,
  {path: 'salle/:id', component: SalleUpdateComponent},

  {path: 'matieres', component: MatiereListComponent},
  {path: 'matieres/:id', component: MatiereUpdateComponent},
  {path:"ajouterMatiere" , component :  MatiereUpdateComponent } ,

  {path: 'formations', component: FormationListComponent},
  {path: 'matieres/:id', component: FormationUpdateComponent},
  {path:"ajouterFormation" , component :  FormationUpdateComponent} ,

  {path:"formatieres" , component :  FormMatiereUpdateComponent} ,
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
