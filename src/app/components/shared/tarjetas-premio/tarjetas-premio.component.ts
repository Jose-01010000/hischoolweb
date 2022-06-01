import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas-premio',
  templateUrl: './tarjetas-premio.component.html',
  styleUrls: ['./tarjetas-premio.component.css'],
})
export class TarjetasPremioComponent implements OnInit {
  @Input() items?: any[];

  constructor() {}

  ngOnInit(): void {}
}
