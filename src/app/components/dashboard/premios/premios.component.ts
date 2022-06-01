import { Component, OnInit } from '@angular/core';
import { PremiosService } from '../../../services/premios.service';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css'],
})
export class PremiosComponent implements OnInit {
  premios: any;

  constructor(private premioService: PremiosService) {}

  ngOnInit(): void {
    this.allPremios();
  }

  allPremios() {
    return this.premioService
      .premios()
      .subscribe((result: any) => (this.premios = result));
  }
}
