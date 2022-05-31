import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../../model/usuario.model';
import { AuthService } from '../../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  // Variable ocultar contraseña
  hide = true;
  recordarme = false;

  // Crear instancia de un nuevo usuario
  usuario: Usuario = new Usuario();

  // Validaciones del formulario
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  facheNacimiento = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const login: boolean = Boolean(localStorage.getItem('login'));
    if (login) {
      this.router.navigate(['/dashboard']);
    }
  }

  // Registrar nuevo usuario
  registerUsuario(): void {
    this.authService.register(this.usuario).subscribe((res: any) => {
      if (res.status) {
        this.openDialog(res.mensaje);
        if (res.status === 1) {
          if (this.recordarme) {
            localStorage.setItem('correo', String(this.usuario.correo));
          }
          this.router.navigate(['login']);
        }
      }
    });
  }

  // Modal para los mensajes que retorne la API
  async openDialog(mensaje: string) {
    await this.dialog.open(DialogComponent, {
      data: { mensaje: mensaje },
    });
  }

  // Obtener mensajes de error de los inputs del formulario --> Input email
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un correo';
    }

    return this.email.hasError('email') ? 'Correo no valido' : '';
  }

  // Obtener mensajes de error de los inputs del formulario --> Input password
  getErrorMessagePass() {
    if (this.password.hasError('required')) {
      return 'Debes ingresar una contraseña';
    }

    if (this.password.hasError('minlength')) {
      return 'Contraseña debe contener 8 caracteres';
    }

    return this.email.hasError('password') ? 'contraseña invalida' : '';
  }

  // Obtener mensajes de error de los inputs del formulario --> Input date picker
  getErrorMessageFecha() {
    if (this.facheNacimiento.hasError('required')) {
      return 'Debes ingresar fecha de nacimiento';
    }

    return this.email.hasError('password') ? 'contraseña invalida' : '';
  }
}
