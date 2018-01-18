import { Injectable } from '@angular/core';

@Injectable()
export class AmbientService {

  constructor() { }

  public set user(user: string) {
    sessionStorage.setItem('user_', JSON.stringify(user));
  }

  public get user() {
    const user = sessionStorage.getItem('user_');
    return user ? JSON.parse(user) : null;
  }
}
