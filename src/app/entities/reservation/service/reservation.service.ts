import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Reservation } from '../reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 
  private baseURL = "http://localhost:2125/reservation"
  constructor(private httpClient : HttpClient) { }

  list():Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(`${this.baseURL}`);
  }

  add(reservation : Reservation) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` , reservation);
  }

  get(id:number):Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.baseURL}/${id}`)
  }
  update(id:number , reservation: Reservation): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,reservation)
  }
  delete(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}