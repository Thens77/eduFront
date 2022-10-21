import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CreneauListComponent } from './entities/creneau/list/list.component';
import { CreneauUpdateComponent } from './entities/creneau/update/update.component';

import { FormMatiereUpdateComponent } from './entities/form-matiere/update/update.component';
import { FormationDetailComponent } from './entities/formation/detail/detail.component';
import { FormationListComponent } from './entities/formation/list/list.component';
import { FormationUpdateComponent } from './entities/formation/update/update.component';
import { MatiereDetailComponent } from './entities/matiere/detail/detail.component';
import { MatiereListComponent } from './entities/matiere/list/list.component';
import { MatiereUpdateComponent } from './entities/matiere/update/update.component';
import { ReservationListComponent } from './entities/reservation/list/list.component';
import { ReservationUpdateComponent } from './entities/reservation/update/update.component';
import { SalleReservationListComponent } from './entities/salle-reservation/list/list.component';
import { SalleListComponent } from './entities/salle/list/list.component';
import { SalleUpdateComponent } from './entities/salle/update/update.component';
import { HomeComponent } from './home/home/home.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DashhomeComponent } from './layouts/dashboard/dashhome/dashhome.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"home" , component :  HomeComponent },
  {path:"dashboard" , component :  DashboardComponent , canActivate: [AuthGuard],
  children: [
    {
      path: '',
      component: DashhomeComponent,
    },
    {
      path: 'matieres',
      component: MatiereListComponent,
    },
    {
      path: 'matiere',
      component: MatiereUpdateComponent,
    },
    {
      path: 'matiere/:id',
      component: MatiereUpdateComponent,
    },
    {
      path: 'matiere/:id/details',
      component: MatiereDetailComponent,
    },
    {
      path: 'formations',
      component: FormationListComponent,
    },
    {
      path: 'formatieres',
      component: FormationUpdateComponent,
    },
    {
      path: 'formation/:id',
      component: FormationUpdateComponent,
    },
    {
      path: 'formation/:id/view',
      component: FormationDetailComponent,
    },
    {
      path: 'salles',
      component: SalleListComponent,
    },
    {
      path: 'ajouterSalle',
      component: SalleUpdateComponent,
    },
    {
      path: 'salle/:id',
      component: SalleUpdateComponent,
    },
    {
      path: 'reservations',
      component: ReservationListComponent,
    },
    {
      path: 'ajouterReservation',
      component: ReservationUpdateComponent,
    },
    {
      path: 'creneaux',
      component: CreneauListComponent,
    },
    {
      path: 'sallesreservation',
      component: SalleReservationListComponent,
    },
    {
      path: 'ajouterCreneau',
      component: CreneauUpdateComponent,
    }
  ]
},
  {path:"salles" , component :  SalleListComponent },
  {path:"ajouterSalle" , component :  SalleUpdateComponent } ,
  {path: 'salle/:id', component: SalleUpdateComponent},

  {path: 'matieres', component: MatiereListComponent},
  {path: 'matieres/:id', component: MatiereUpdateComponent},
  {path:"ajouterMatiere" , component :  MatiereUpdateComponent } ,

  {path: 'formations', component: FormationListComponent},
  {path: 'formation/:id/view', component: FormationDetailComponent},
  {path: 'formation/:id', component: FormationUpdateComponent},
  {path:"ajouterFormation" , component :  FormationUpdateComponent} ,

  {path:"formatieres" , component :  FormMatiereUpdateComponent} ,
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
