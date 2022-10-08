import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimeUnit } from 'ngx-material-timepicker/src/app/material-timepicker/models/time-unit.enum';
import { Creneau, ICreneau } from '../creneau.model';
import { CreneauService } from '../service/creneau.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class CreneauUpdateComponent implements OnInit {
   

  creneau: Creneau = new Creneau();
  id!: number;
  editForm = this.fb.group({
    id: [],
    heureDebut: [],
    heureFin: [],
    
  });

  constructor(private creneauService : CreneauService ,private router : Router, protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];
    this.creneauService.get(this.id).subscribe( data => {
      this.creneau = data ;
    }, error => console.log(error))
  
  }

  protected updateForm(creneau: ICreneau): void {
    this.editForm.patchValue({
      id: creneau.id,
      heureDebut : creneau.heureDebut,
      heureFin: creneau.heureFin,
     
      
      
    });
  }
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;
  save():void{
    
    console.log("amm "+this.creneau.heureDebut);
    

    console.log(this.creneau.heureFin);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.creneauService.add(this.creneau).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/dashboard/creneau'])

      },
      error => console.log(error)
      );
    }
   else{
    this.creneauService.update(this.id,this.creneau).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/dashboard/creneau'])

    },
    error => console.log(error)
    )
   }

   
  }
}
