import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private url = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  cursos() {
    return this.http.get(`${this.url}/curso/cursos`);
  }
}
