import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] | undefined ;
  searchText : any ;

  constructor(private reservationService : ReservationService) { }

  ngOnInit(): void {
    this.get();
  }

  private get() : void {
    this.reservationService.list().subscribe(data=> {
      this.reservations = data ;
    })
  }

  delete(id: number): void {
    this.reservationService.delete(id).subscribe(() => {
     this.get();
    });
  }

}
