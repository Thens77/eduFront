import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Formation } from '../../formation/formation.model';
import { FormationService } from '../../formation/service/formation.service';
import { Matiere } from '../../matiere/matiere.model';
import { MatiereService } from '../../matiere/service/matiere.service';
import { FormMatiere } from '../form-matiere.model';
import { FormMatiereService } from '../service/form-matiere.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class FormMatiereUpdateComponent implements OnInit {
  dropdownList :any = [];
  selectedItems :any = [];
  dropdownSettings :IDropdownSettings={};


  formMatiere  : FormMatiere = new FormMatiere();
  id!: number;

  editForm = this.fb.group({
    id: [],
    formation: [],
    matiere: [],
   

  });




  formations : Formation[] | undefined;
  constructor(private formMatiereService: FormMatiereService ,private matiereService : MatiereService, private formationService : FormationService , protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getMatiere();
    this.getFormations();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nom',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getMatiere():void{
    this.matiereService.list().subscribe( data => {
      this.dropdownList = data;
    }, error => console.log(error))
  }
  getFormations():void{
    this.formationService.list().subscribe( data => {
      this.formations = data;
    }, error => console.log(error))
  }


  protected updateForm(formMatiere: FormMatiere): void {
    this.editForm.patchValue({
      id: formMatiere.id,
      formation: formMatiere.formation,
      matieres: formMatiere.matiere,
     
    });
  }

  save():void{

    console.log(this.formMatiere.formation);
    console.log(this.formMatiere.matiere);

    if(this.editForm.get(['id'])!.value === undefined ) { 
      for(const m of this.editForm.get(['matiere'])!.value){
        const formMatiere = this.createFromForm(m);
          this.formMatiereService.add(formMatiere).subscribe(data =>{
            console.log(data);
          },
          error => console.log(error)
          );
        }
  }
   else{
    this.formMatiereService.update(this.id,this.formMatiere).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error)
    )
   }
  

   
  }

  protected createFromForm(m : Matiere): FormMatiere {
    return {
      ...new FormMatiere(),
      id: this.editForm.get(['id'])!.value,
      formation: this.editForm.get(['formation'])!.value,
      matiere:  m,
    };
  }
}

