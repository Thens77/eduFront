import { Component, OnInit } from '@angular/core';
import { Salle } from '../salle.model';
import { SalleService } from '../service/salle.service';

@Component({
  selector: 'salle-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SalleListComponent implements OnInit {

  salles : Salle[] | undefined ;
  searchText : any ;

  constructor(private salleService : SalleService) { }

  ngOnInit(): void {
    this.get();
  }

  private get() : void {
    this.salleService.list().subscribe(data=> {
      this.salles = data ;
    })
  }

  delete(id: number): void {
    this.salleService.delete(id).subscribe(() => {
     this.get();
    });
  }
}
