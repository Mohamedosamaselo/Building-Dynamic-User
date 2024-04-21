import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userUrl = 'https://reqres.in/api/users?';

  constructor(private http: HttpClient) {}

  getUsers(pageNo: number, per_page: number) {
    return this.http
      .get<any>(`${this.userUrl}` + '&page=' + pageNo + '&per_page=' + per_page)
      .pipe(
        catchError((err: any) => {
          return 'x';
        })
      );
  }
  getUserDetails(pageNo: number, per_page: number, id: number) {
    return this.http
      .get<any>(
        `${this.userUrl}` +
          '&page=' +
          pageNo +
          '&per_page=' +
          per_page +
          '&id=' +
          id
      )
      .pipe(
        catchError((err: any) => {
          return 'x';
        })
      );
  }
}
