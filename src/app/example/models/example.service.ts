import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleModels } from '.';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(

  ) {
    console.log('[ExampleService]: constructor()');
  }

  find() : Observable<ExampleModels.ExampleItem[]>{
    return
  }
}
