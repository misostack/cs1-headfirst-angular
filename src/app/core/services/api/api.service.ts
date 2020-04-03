import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

import {
  BaseApiInterface,
  Provider,
  BaseAPIProvider,
  HttpService,
} from '@modules/base';
import { Observable, Observer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

const API_PROVIDER = environment.providers.api;
const AUTH = environment.auth;

@Provider(API_PROVIDER)
@Injectable({
  providedIn: 'root',
})
export class APIService implements BaseApiInterface {
  provider: BaseAPIProvider;

  constructor(
    private httpService: HttpService
  ) {}

  get<T>(path: string, params: {} = {}, requiredAuth: boolean = true): Observable<T> {
    return new Observable((obs: Observer<T>) => {
      let httpOptions = {}
      const token = this.getAuthToken();
      if (requiredAuth && token) {
        httpOptions = Object.assign({}, {
          Authorization: `${AUTH.type} ${token}`,
        });
      }
      this.httpService.get(path, params, httpOptions)
      .subscribe(
        (res: {status, body}) => obs.next(res.body),
        (err: HttpErrorResponse) => obs.error(err)
      );
    });
  }

  getAuthToken() {
    return localStorage.getItem(AUTH.key);
  }

  getProvider(): BaseAPIProvider {
    return this.provider;
  }
}
