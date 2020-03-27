import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from '@environments/environment';
import { map, timeout, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
      timeout(5000),
      tap(
          // Succeeds when there is a response; ignore other events
          event => event,
          // Operation failed; error is an HttpErrorResponse
          error => error
      )
    );
  }

  private buildOptions(params: {}, httpOptions = {}) {
    const headers = new HttpHeaders(httpOptions);
    return Object.assign({}, {
      headers,
      params,
    }, { observe: 'response' });
  }
}
