export class Usuario {
  id?: number;
  nombre?: string;
  apellido?: string;
  correo?: string;
  contrasena?: string;
  fechaNacimiento?: Date;
  rolUsuario: number = 1;
  fechaRegistro?: Date;
}
