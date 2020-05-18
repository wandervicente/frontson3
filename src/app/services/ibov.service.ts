import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibov } from '../models/ibov.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IbovService {
  url = 'http://localhost:3000/ibovs';

  constructor(private http: HttpClient) { }

  getIbovs(): Observable<Ibov> {
    return this.http.get<Ibov>(this.url)
  }
}
