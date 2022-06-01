import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.css'],
})
export class TarjetaCursoComponent implements OnInit {
  @Input() items?: any[];

  constructor() {}

  ngOnInit(): void {}
}
