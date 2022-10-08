import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] | undefined ;
  searchText : any ;

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    this.get();
  }

  private get() : void {
    this.clientService.list().subscribe(data=> {
      this.clients = data ;
    })
  }

  delete(id: number): void {
    this.clientService.delete(id).subscribe(() => {
     this.get();
    });
  }
}