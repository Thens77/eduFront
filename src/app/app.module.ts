import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SalleListComponent } from './entities/salle/list/list.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgxWebstorageModule} from 'ngx-webstorage';

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
import {MatCardModule} from '@angular/material/card';
import { FormationDetailComponent } from './entities/formation/detail/detail.component';
import { NavbarComponent, SignInDialog, SignUpDialog } from './layouts/navbar/navbar.component';
import { SliderComponent } from './layouts/slider/slider.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DashhomeComponent } from './layouts/dashboard/dashhome/dashhome.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatiereDetailComponent } from './entities/matiere/detail/detail.component';
import { RevueListComponent } from './entities/revue/list/list.component';
import { RevueUpdateComponent } from './entities/revue/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    MainComponent,
    SignInDialog,
    SignUpDialog,

    HomeComponent,

    SalleListComponent,
    SalleUpdateComponent ,

    MatiereListComponent,
    MatiereUpdateComponent,
    MatiereDetailComponent,

    FormationListComponent,
    FormationUpdateComponent,
    FormationDetailComponent,

    FormMatiereUpdateComponent,

    RevueListComponent,
    RevueUpdateComponent,

    
     HomeComponent,
     DashboardComponent,
     DashhomeComponent
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
    BrowserAnimationsModule,
    MatCardModule,
   
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    NgxWebstorageModule.forRoot()

    
  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
