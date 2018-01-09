import { IServiceCrud } from './../domain/interfaces/IServiceCrud';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseService implements IServiceCrud {

  urlAPI = 'YOUR-URL-API'

  constructor(public httpCliente: HttpClient) { }

  getAll(url: any): Observable<any[]> {
    return this.httpCliente.get<any>(url);
  }
  getUnique(url: any, id: any): Observable<any[]> {
    return this.httpCliente.get<any[]>(`${this.urlAPI}/${url}/${id}`);
  }
  post(url: any, data: any): Observable<any> {
    return this.httpCliente.post<any>(`${this.urlAPI}/${url}`, data);
  }
  put(url: any, data: any) {
    return this.httpCliente.put<any>(`${this.urlAPI}/${url}`, data);
  }
  delete(url: any, id: any) {
    return this.httpCliente.delete<any>(`${this.urlAPI}/${url}/${id}`);
  }

}
