import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursousuario',
  templateUrl: './cursousuario.component.html',
  styleUrls: ['./cursousuario.component.css'],
})
export class CursousuarioComponent implements OnInit {
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
