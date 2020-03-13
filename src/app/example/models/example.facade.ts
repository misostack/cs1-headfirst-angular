import { Injectable } from '@angular/core';
import { ExampleService } from './example.service';
import { ExampleModels } from './index';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleFacade {

  private exampleListSubject = new BehaviorSubject<ExampleModels.ExampleItem[]>([]);
  public exampleList$ = this.exampleListSubject.asObservable();

  constructor(
    private exampleService: ExampleService
  ) {
    console.log('[ExampleFacade]: constructor()');
  }

  // crud
  find(
    filterOptions: ExampleModels.ExampleFilterOptions,
    sortOption: ExampleModels.ExampleSortOption
    ) : void
    {
      console.log('filterOptions', filterOptions);
      console.log('sortOption', sortOption);

      this.exampleListSubject.next([
        {"id": "1", "title": "something", "description": "lorem ipsum lorem ipib klak blomsoo", "status": "pending", "createdAt": 123123, "updatedAt": 123123},
        {"id": "2", "title": "something", "description": "lorem ipsum lorem ipib klak blomsoo", "status": "done", "createdAt": 123123, "updatedAt": 123123},
        {"id": "3", "title": "something", "description": "lorem ipsum lorem ipib klak blomsoo", "status": "archived", "createdAt": 123123, "updatedAt": 123123},
        {"id": "4", "title": "something", "description": "lorem ipsum lorem ipib klak blomsoo", "status": "inprogress", "createdAt": 123123, "updatedAt": 123123},
        {"id": "5", "title": "something", "description": "lorem ipsum lorem ipib klak blomsoo", "status": "done", "createdAt": 123123, "updatedAt": 123123},
      ])
  }

  read(exampleId: string) : ExampleModels.ExampleItem{
    return {
      id: exampleId,
      title: 'abc',
      description: 'description lorem ipsum veru lof',
    }
  }

  create(exampleItem: ExampleModels.ExampleItem) : ExampleModels.ExampleItem{
    console.log(exampleItem)
    return {
      id: '123',
      title: 'abc',
      description: 'lorem',
      status: 'done'
    }
  }

  update() {

  }
}
