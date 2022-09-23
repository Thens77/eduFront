import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation.model';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class FormationListComponent implements OnInit {
  formations : Formation[] | undefined ;
  searchText : any ;
  constructor(private formationService : FormationService) { }

  ngOnInit(): void {
    this.get();
  }

  private get() : void {
    this.formationService.list().subscribe(data=> {
      this.formations = data ;
    })
  }

  delete(id: number): void {
    this.formationService.delete(id).subscribe(() => {
     this.get();
    });
  }

}
