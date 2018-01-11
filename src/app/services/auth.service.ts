import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class AuthService {

  // token
  public set token(token) {
    sessionStorage.setItem('token_', token);
  }

  public get token() {
    return sessionStorage.getItem('token_');
  }

  public get tokenDecoded() {
    const jwtH = new JwtHelper();
    return jwtH.decodeToken(this.token);
  }

  // auth
  public authenticated() {
    // verifica se o token está expirado
    const jwtH = new JwtHelper();
    return !jwtH.isTokenExpired(this.token);
  }

}
