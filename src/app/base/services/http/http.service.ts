import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { timeout, tap } from 'rxjs/operators';

const DEFAULT_TIME_OUT = 5000;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly TIMEOUT = 5000;
  constructor(
    private http: HttpClient,
  ) {}

  private getTimeout(opts: any) {
    return opts.timeout ? opts.timeout : this.TIMEOUT;
  }

  get(path: string, params: {} = {}, httpOptions = {}) {
    return this.http.get(path, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(this.getTimeout(httpOptions))
    );
  }

  post(path: string, payload: {}, params: {} = {}, httpOptions = {}) {
    return this.http.post(path, payload, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(this.getTimeout(httpOptions))
    );
  }

  patch(path: string, payload: {}, params: {} = {}, httpOptions = {}) {
    return this.http.patch(path, payload, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(this.getTimeout(httpOptions))
    );
  }

  put(path: string, payload: {}, params: {} = {}, httpOptions = {}) {
    return this.http.put(path, payload, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(this.getTimeout(httpOptions))
    );
  }

  delete(path: string, params: {} = {}, httpOptions = {}){
    return this.http.delete(path, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(this.getTimeout(httpOptions))
    );
  }

  options(path, params: {} = {}, httpOptions = {}) {
    return this.http.options(path, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(this.getTimeout(httpOptions))
    );
  }

  head(path, params: {} = {}, httpOptions = {}) {
    return this.http.options(path, this.buildOptions(params, httpOptions))
    .pipe(
      timeout(this.getTimeout(httpOptions))
    );
  }

  private buildOptions(params: {}, httpOptions = {}) {
    const headers = new HttpHeaders(httpOptions);
    // use body to prevent error raise if the timeout exceed
    return Object.assign({}, {
      headers,
      params,
    }, { observe: 'body' });
  }

  // private buildOptions(params: {}, httpOptions = {}, observe: 'reponse' | 'body' = 'reponse') {
  //   const headers = new HttpHeaders(httpOptions);
  //   return Object.assign({}, {
  //     headers,
  //     params,
  //   }, { observe });
  // }
}
