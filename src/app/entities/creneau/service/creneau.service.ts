import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Creneau } from '../creneau.model';

@Injectable({
  providedIn: 'root'
})
export class CreneauService {

  private baseURL = "http://localhost:2125/creneau"
  constructor(private httpClient : HttpClient) { }

  list():Observable<Creneau[]>{
    return this.httpClient.get<Creneau[]>(`${this.baseURL}`);
  }

  add(creneau : Creneau) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` , creneau);
  }

  get(id:number):Observable<Creneau>{
    return this.httpClient.get<Creneau>(`${this.baseURL}/${id}`)
  }
  update(id:number , creneau: Creneau): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,creneau)
  }
  delete(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
