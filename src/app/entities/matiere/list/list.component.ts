import { Component, OnInit } from '@angular/core';
import { Matiere } from '../matiere.model';
import { MatiereService } from '../service/matiere.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class MatiereListComponent implements OnInit {

  matieres : Matiere[] | undefined ;
  searchText : any ;

  constructor(private matiereService : MatiereService) { }

  ngOnInit(): void {
    this.get();
  }

  private get() : void {
    this.matiereService.list().subscribe(data=> {
      this.matieres = data ;
    })
  }

  delete(id: number): void {
    this.matiereService.delete(id).subscribe(() => {
     this.get();
    });
  }

}
