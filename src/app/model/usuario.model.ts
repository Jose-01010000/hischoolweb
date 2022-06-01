export class Usuario {
  id: string = this.getUniqueId(2);
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

  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0)
        .toString(16)
        .substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  getNombre(): string {
    return `${this.nombre} ${this.apellido}`;
  }
}
