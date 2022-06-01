import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PremiosService {
  private url = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  premios() {
    return this.http.get(`${this.url}/premio/premios`);
  }
}
