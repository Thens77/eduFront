import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, IClient } from '../client.model';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  client: Client = new Client();
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
    active: [],
   
  });

  constructor(private clientService : ClientService ,private router : Router, protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];
    this.clientService.get(this.id).subscribe( data => {
      this.client = data ;
    }, error => console.log(error))
  }

  protected updateForm(client: IClient): void {
    this.editForm.patchValue({
      id: client.id,
      nom: client.nom,
      userName: client.userName,
      password : client.password,
      prenom : client.prenom,
      age : client.age,
      email : client.email,
      cin : client.cin,
      active : client.active,

      
      
    });
  }

  save():void{
    console.log(this.client.nom);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.clientService.add(this.client).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/clients'])

      },
      error => console.log(error)
      );
    }
   else{
    this.clientService.update(this.id,this.client).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/clients'])

    },
    error => console.log(error)
    )
   }

   
  }
}
