import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  cursos: any;

  constructor(private cursoService: CursosService) {}

  ngOnInit(): void {
    this.allCursos();
  }

  allCursos() {
    return this.cursoService
      .getAllCursos()
      .subscribe((result: any) => (this.cursos = result));
  }
}
