import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceforgitService {
private username='roddakumar';
private client_id='191f1bca3867b0b6a612';
private client_secret='bb9f405997cab694c2bf70c18c89e34eb59a5436';


  constructor(private http: HttpClient) { }
  getData() : Observable<any>{
    return this.http.get('https://api.github.com/users/roddakumar/repos');
}
}