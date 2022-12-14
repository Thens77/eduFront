import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur, IFormateur } from '../formateur.model';
import { FormateurService } from '../service/formateur.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class FormateurUpdateComponent implements OnInit {
  selectedFile!: File;
  imgURL: any;

  formateur: Formateur = new Formateur();
  id!: number;
  editForm = this.fb.group({
    id: [],
    userName: [],
    password: [],
    nom: [],
    prenom: [],
    age: [],
    email: [],
    cin: [],
    salaire: [],
    picByte : [],
    dernierPaiement: [],
   
  });

  constructor(private formateurService : FormateurService ,private router : Router, protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];
    this.formateurService.get(this.id).subscribe( data => {
      this.formateur = data ;
    }, error => console.log(error))
  }
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log("haa hiiyaaa lfile  "+ this.selectedFile.name);
    console.log("haa hiiyaaa sizee "+ this.selectedFile?.size);
    this.handleFileSelect(event);

  }
  private base64textString:String="";
  
 
  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.formateur.picByte= btoa(binaryString);
          console.log("lakhraaaaaaaaa :"+this.formateur.picByte);
  }
  
  protected updateForm(formateur: IFormateur): void {
    this.editForm.patchValue({
      id: formateur.id,
      nom: formateur.nom,
      userName: formateur.userName,
      password : formateur.password,
      prenom : formateur.prenom,
      age : formateur.age,
      email : formateur.email,
      cin : formateur.cin,
      salaire : formateur.salaire,
      dernierPaiement : formateur.dernierPaiement,
      picByte :formateur.picByte,
      
      
    });
  }

  save():void{
    console.log(this.formateur.nom);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.formateurService.add(this.formateur).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/dashboard/formateur'])

      },
      error => console.log(error)
      );
    }
   else{
    this.formateurService.update(this.id,this.formateur).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/dashboard/formateur'])

    },
    error => console.log(error)
    )
   }

   
  }
}
