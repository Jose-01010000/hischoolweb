import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../services/cursos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  cursos: any = {};

  constructor(private cursoService: CursosService) {}

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    return this.cursoService
      .cursos()
      .subscribe((result: any) => (this.cursos = result));
  }
}
