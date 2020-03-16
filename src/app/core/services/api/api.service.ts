import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { map, timeout } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
    ) {
      console.log('ApiService')
  }

  ping() : Observable<any>{
    return this.get('/ping')
  }

  get<T>(path: string, params: {} = {}) {
    return this.http
    .get(this.buildURL(path), this.buildOptions(params))
    .pipe(
      timeout(5000),
      map(resp => this.marshalResponse(resp))
    );
  }

  post(path: string, payload: {}, params: {} = {}) {
    return this.http
    .post(this.buildURL(path), payload, this.buildOptions(params))
    .pipe(map(resp => this.marshalResponse(resp)));
  }

  private marshalResponse(resp) {
    if (environment.debug){
      console.group('<DEBUG>');
      console.info('<RESP>', resp);
      console.info('<RESP.headers>', resp.headers);
      console.info('<RESP.body>', resp.body);
      console.groupEnd();
    }
    return resp.body;
  }

  private buildOptions(params: {}) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return Object.assign({}, {
      headers: headers,
      params: params,
    }, { observe: 'response' })
  }

  private buildURL(path: string) {
    if (path.charAt(0) !== '/') {
      path = `/${path}`;
    }
    return `${environment.apiUrl}${path}`;
  }
}
