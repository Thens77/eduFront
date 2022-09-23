import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SalleListComponent } from './entities/salle/list/list.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { SalleUpdateComponent } from './entities/salle/update/update.component';
import { FormationListComponent } from './entities/formation/list/list.component';
import { MatiereListComponent } from './entities/matiere/list/list.component';
import { MatiereUpdateComponent } from './entities/matiere/update/update.component';
import { FormationUpdateComponent } from './entities/formation/update/update.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormMatiereUpdateComponent } from './entities/form-matiere/update/update.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    SalleListComponent,
    SalleUpdateComponent ,

    MatiereListComponent,
    MatiereUpdateComponent,
   
    FormationListComponent,
    FormationUpdateComponent,

    FormMatiereUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    MatSelectModule,
    BrowserAnimationsModule
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
