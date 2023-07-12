export interface UserI {
  id?: number;
  nombre: string;
  apellido: string;
}

export class User {
  constructor(
    public nombre: string,
    public apellido: string,
    public id?: number
  ) {}
}
