import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../client/client.model';
import { ClientService } from '../../client/service/client.service';
import { Formation } from '../../formation/formation.model';
import { FormationService } from '../../formation/service/formation.service';
import { Reservation } from '../../reservation/reservation.model';
import { ReservationService } from '../../reservation/service/reservation.service';
import { IPanier, Panier } from '../panier.model';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class PanierUpdateComponent implements OnInit {



  clients : Client[] | undefined;
  formations : Formation[] | undefined;
  panier1  : Panier = new Panier();
  panier  : Panier = new Panier();
  id!: number;

  editForm = this.fb.group({
    id: [],
    client: [],
    formation: [],
    
   

  });

  constructor(private router : Router,private panierService : PanierService,private formationService : FormationService,private clientService : ClientService, protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getClients();
    this.getFormations();
    this.id =this.activatedRoute.snapshot.params["id"];
    this.panierService.get(this.id).subscribe( data => {
      this.panier = data ;
    }, error => console.log(error))
  }
  getClients():void{
    this.clientService.list().subscribe( data => {
      this.clients = data;
    }, error => console.log(error))
  }
  getFormations():void{
    this.formationService.list().subscribe( data => {
      this.formations = data;
    }, error => console.log(error))
  }
  protected updateForm(panier: IPanier): void {
    this.editForm.patchValue({
      id: panier.id,
      client: panier.client,
      reservation: panier.formation,
      
     
    });
  }
  save():void{
    
  /*  console.log(this.editForm.get(['formateur'])!.value);
    console.log(this.editForm.get(['salle'])!.value);
    console.log(this.editForm.get(['creneau'])!.value);
    console.log(this.editForm.get(['matiere'])!.value);
    console.log(this.reservation.date);
    */
    if(this.editForm.get(['id'])!.value === undefined ) { 
      const panier1 = this.createFromForm();
     // console.log("date : ezrezr "+this.panier1.date);
      this.panierService.add(panier1).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/dashboard/panier'])

      },
      error => console.log(error)
      );
    }
   else{
    this.panierService.update(this.id,this.panier).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/dashboard/panier'])

    },
    error => console.log(error)
    )
   }

   
  }
  protected createFromForm(): Panier {
    return {
      ...new Reservation(),
      id: this.editForm.get(['id'])!.value,
      client : this.editForm.get(['client'])!.value,

      formation : this.editForm.get(['formation'])!.value,
      
     
    
    };
  }

}
