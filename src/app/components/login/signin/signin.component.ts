import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from '../../../model/usuario.model';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  hide: boolean = true;
  mensaje: string = '';
  estado: boolean = false;
  recordarme = false;

  usuario: Usuario = new Usuario();

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  /* Posiciones en las cuales se puede ubicar el componente snackbar en la pantalla
   *  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
   *  verticalPosition: MatSnackBarVerticalPosition = 'top';
   */

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const login: boolean = Boolean(localStorage.getItem('login'));
    if (login) {
      this.router.navigate(['/dashboard']);
    }

    if (localStorage.getItem('correo')) {
      this.usuario.correo = String(localStorage.getItem('correo'));
      this.recordarme = true;
    }
  }

  loginUsuario() {
    this.authService.singin(this.usuario).subscribe((res: any) => {
      if (res.status) {
        this.openDialog(res.status);
      } else {
        if (this.recordarme) {
          localStorage.setItem('correo', String(this.usuario.correo));
        }

        localStorage.setItem('token', res.token);
        localStorage.setItem('login', 'true');
        this.router.navigate(['/dashboard']);
      }
    });
  }

  // openSnackBar(message: string) {
  //   this._snackBar.open(message, 'Aceptar', {
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     panelClass: ['warning'],
  //   });
  // }

  openDialog(mensaje: string): void {
    this.dialog.open(DialogComponent, {
      data: { mensaje: mensaje },
    });
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un correo';
    }

    return this.email.hasError('email') ? 'Correo no valido' : '';
  }

  getErrorMessagePass() {
    if (this.password.hasError('required')) {
      return 'Debes ingresar una contraseña';
    }

    if (this.password.hasError('minlength')) {
      return 'Contraseña debe contener 8 caracteres';
    }

    return this.email.hasError('password') ? 'contraseña invalida' : '';
  }
}
