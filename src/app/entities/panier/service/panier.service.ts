import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panier } from '../panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private baseURL = "http://localhost:2125/panier"
  constructor(private httpClient : HttpClient) { }

  list():Observable<Panier[]>{
    return this.httpClient.get<Panier[]>(`${this.baseURL}`);
  }

  add(panier : Panier) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` , panier);
  }

  get(id:number):Observable<Panier>{
    return this.httpClient.get<Panier>(`${this.baseURL}/${id}`)
  }
  update(id:number , panier: Panier): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,panier)
  }
  delete(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
