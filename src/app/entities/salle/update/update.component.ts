import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ISalle, Salle } from '../salle.model';
import { SalleService } from '../service/salle.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class SalleUpdateComponent implements OnInit {

  salle: Salle = new Salle();
  id!: number;
  editForm = this.fb.group({
    id: [],
    code: [],
    nbrPlace: [],
    type: [],
  });



  constructor(private salleService : SalleService , protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];
    this.salleService.get(this.id).subscribe( data => {
      this.salle = data ;
    }, error => console.log(error))
  }

  protected updateForm(salle: ISalle): void {
    this.editForm.patchValue({
      id: salle.id,
      code: salle.code,
      nbrPlace: salle.nbrPlace,
      type: salle.type,
      
    });
  }

  save():void{
    console.log(this.salle.code);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.salleService.add(this.salle).subscribe(data =>{
        console.log(data);
      },
      error => console.log(error)
      );
    }
   else{
    this.salleService.update(this.id,this.salle).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error)
    )
   }

   
  }

}
