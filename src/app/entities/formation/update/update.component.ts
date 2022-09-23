import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Matiere } from '../../matiere/matiere.model';
import { MatiereService } from '../../matiere/service/matiere.service';
import { Formation, IFormation } from '../formation.model';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class FormationUpdateComponent implements OnInit {

 

  matieres: Matiere[] = []

  formation: Formation = new Formation();
  id!: number;
  editForm = this.fb.group({
    id: [],
    nom: [],
    matieres: [],
   
  });

  constructor(private matiereService : MatiereService, private formationService : FormationService , protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   
    this.id =this.activatedRoute.snapshot.params["id"];
    this.formationService.get(this.id).subscribe( data => {
      this.formation = data ;
    }, error => console.log(error))
  
   
  }

  protected updateForm(formation: IFormation): void {
    this.editForm.patchValue({
      id: formation.id,
      nom: formation.nom,
      matieres: formation.matieres,
      
      
    });
  }

  save():void{
    console.log(this.formation.nom);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.formationService.add(this.formation).subscribe(data =>{
        console.log(data);
      },
      error => console.log(error)
      );
    }
   else{
    this.formationService.update(this.id,this.formation).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error)
    )
   }

   
  }

  

}
