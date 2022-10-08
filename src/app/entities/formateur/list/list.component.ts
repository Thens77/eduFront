import { Component, OnInit } from '@angular/core';
import { Formateur } from '../formateur.model';
import { FormateurService } from '../service/formateur.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class FormateurListComponent implements OnInit {
  retrievedImage : any;

  formateurs: Formateur[] | undefined ;
  searchText : any ;

  constructor(private formateurService : FormateurService) { }

  ngOnInit(): void {
    this.list2();
  }

  private get() : void {
    this.formateurService.list().subscribe(data=> {
      this.formateurs = data ;
    })
  }
  list2(){
    this.formateurService.list().subscribe(data=> {
      this.formateurs = data ;
      this.formateurs.forEach((element, index) => {
        this.retrievedImage = 'data:image/jpeg;base64,' +element.picByte;
        this.formateurs[index].picByte = this.retrievedImage; 
       
      });
      console.log("ammmm heeeeere22");
      console.log(this.retrievedImage);
    })
  }
  delete(id: number): void {
    this.formateurService.delete(id).subscribe(() => {
     this.get();
    });
  }

}
