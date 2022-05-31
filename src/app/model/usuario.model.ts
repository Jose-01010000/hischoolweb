export class Usuario {
  id?: number;
  nombre?: string;
  apellido?: string;
  correo?: string;
  contrasena?: string;
  fechaNacimiento?: Date;
  rolUsuario: number = 1;
  fechaRegistro?: Date;

  // constructor(
  //   id: number,
  //   nombre: string,
  //   apellido: string,
  //   correo: string,
  //   contrasena: string,
  //   fechaNacimiento: Date,
  //   rolUsuario: number,
  //   fechaRegistro: Date
  // ) {
  //   this.id = id;
  //   this.nombre = nombre;
  //   this.apellido = apellido;
  //   this.correo = correo;
  //   this.contrasena = contrasena;
  //   this.fechaNacimiento = fechaNacimiento;
  //   this.rolUsuario = rolUsuario;
  //   this.fechaRegistro = fechaRegistro;
  // }

  getNombre(): string {
    return `${this.nombre} ${this.apellido}`;
  }
}
