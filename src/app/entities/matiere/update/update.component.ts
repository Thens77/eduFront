import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IMatiere, Matiere } from '../matiere.model';
import { MatiereService } from '../service/matiere.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class MatiereUpdateComponent implements OnInit {
  matiere: Matiere = new Matiere();
  id!: number;
  editForm = this.fb.group({
    id: [],
    nom: [],
    libelle: [],
   
  });

  constructor(private matiereService : MatiereService , protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];
    this.matiereService.get(this.id).subscribe( data => {
      this.matiere = data ;
    }, error => console.log(error))
  }

  protected updateForm(matiere: IMatiere): void {
    this.editForm.patchValue({
      id: matiere.id,
      nom: matiere.nom,
      libelle: matiere.libelle,
      
      
    });
  }

  save():void{
    console.log(this.matiere.nom);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.matiereService.add(this.matiere).subscribe(data =>{
        console.log(data);
      },
      error => console.log(error)
      );
    }
   else{
    this.matiereService.update(this.id,this.matiere).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error)
    )
   }

   
  }
}
