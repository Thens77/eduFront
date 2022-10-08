import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Creneau } from '../../creneau/creneau.model';
import { CreneauService } from '../../creneau/service/creneau.service';
import { Formateur } from '../../formateur/formateur.model';
import { FormateurService } from '../../formateur/service/formateur.service';
import { FormationService } from '../../formation/service/formation.service';
import { Matiere } from '../../matiere/matiere.model';
import { MatiereService } from '../../matiere/service/matiere.service';
import { Salle } from '../../salle/salle.model';
import { SalleService } from '../../salle/service/salle.service';
import { IReservation, Reservation } from '../reservation.model';
import { ReservationService } from '../service/reservation.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

 


  reservation1  : Reservation = new Reservation();
  reservation  : Reservation = new Reservation();
  id!: number;

  editForm = this.fb.group({
    id: [],
    salle: [],
    creneau: [],
    matiere: [],
    formateur: [],
    date:[],
   

  });

  salles : Salle[] | undefined;
  creneaux : Creneau[] | undefined;
  Formateurs : Formateur[] | undefined;
  matieres : Matiere[] | undefined;
  
  constructor(private creneauService : CreneauService,private router : Router,private reservationService : ReservationService,private matiereService : MatiereService,private salleService : SalleService, private formateurService : FormateurService , protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.getFormations();
    this.getMatieres();
    this.getSalles();
    this.getCreneaux();
    this.id =this.activatedRoute.snapshot.params["id"];
    this.reservationService.get(this.id).subscribe( data => {
      this.reservation = data ;
    }, error => console.log(error))
   
  }

  getCreneaux():void{
    this.creneauService.list().subscribe( data => {
      this.creneaux = data;
    }, error => console.log(error))
  }
  getSalles():void{
    this.salleService.list().subscribe( data => {
      this.salles = data;
    }, error => console.log(error))
  }
  getFormations():void{
    this.formateurService.list().subscribe( data => {
      this.Formateurs = data;
    }, error => console.log(error))
  }
  getMatieres():void{
    this.matiereService.list().subscribe( data => {
      this.matieres = data;
    }, error => console.log(error))
  }

  protected updateForm(reservation: IReservation): void {
    this.editForm.patchValue({
      id: reservation.id,
      formateur: reservation.formateur,
      matiere: reservation.matiere,
      creneau : reservation.creneau,
      salle : reservation.salle,
      date : reservation.date,
     
    });
  }


  save():void{
    
    console.log(this.editForm.get(['formateur'])!.value);
    console.log(this.editForm.get(['salle'])!.value);
    console.log(this.editForm.get(['creneau'])!.value);
    console.log(this.editForm.get(['matiere'])!.value);
    console.log(this.reservation.date);
    
    if(this.editForm.get(['id'])!.value === undefined ) { 
      const reservation1 = this.createFromForm();
      console.log("date : ezrezr "+reservation1.date);
      this.reservationService.add(reservation1).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/dashboard/reservation'])

      },
      error => console.log(error)
      );
    }
   else{
    this.reservationService.update(this.id,this.reservation).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/dashboard/reservation'])

    },
    error => console.log(error)
    )
   }

   
  }
  protected createFromForm(): Reservation {
    return {
      ...new Reservation(),
      id: this.editForm.get(['id'])!.value,
      salle : this.editForm.get(['salle'])!.value,

      formateur : this.editForm.get(['formateur'])!.value,
      
      matiere : this.editForm.get(['matiere'])!.value,
      creneau : this.editForm.get(['creneau'])!.value,
      date : this.reservation.date,
     
    
    };
  }
}

 


