import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { timeout, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
  ) {}

  get(path: string, params: {} = {}, httpOptions = {}){
    return this.http.get(path, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(5000)
    );
  }

  post(path: string, payload: {}, params: {} = {}, httpOptions = {}) {
    return this.http.post(path, payload, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(5000)
    );
  }

  patch(path: string, payload: {}, params: {} = {}, httpOptions = {}) {
    return this.http.patch(path, payload, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(5000)
    );
  }

  delete(path: string, params: {} = {}, httpOptions = {}){
    return this.http.delete(path, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(5000)
    );
  }

  private buildOptions(params: {}, httpOptions = {}, observe: 'reponse' | 'body' = 'reponse') {
    const headers = new HttpHeaders(httpOptions);
    return Object.assign({}, {
      headers,
      params,
    }, { observe });
  }
}
