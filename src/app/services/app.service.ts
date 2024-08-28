import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient
  ) { }

  commonUrl = 'http://localhost:3001'

  login(data: any): Observable<{ token: string }> {
    return this._http.post<{ token: string }>(`${this.commonUrl}/signin`, data)
  }

  users(): Observable<IUserModel[]> {
    return this._http.get<IUserModel[]>(`${this.commonUrl}/user`)
  }
}

export interface IUserModel {
  Name: string
  Phone: string
  ID: string
  Nutritionist: string
  Status: string
  Organization: string
  Date: string
  Updated: string
  selected: boolean
}
