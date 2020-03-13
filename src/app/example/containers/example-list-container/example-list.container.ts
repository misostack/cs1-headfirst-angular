import { Component, OnInit } from '@angular/core';
import { ExampleFacade, ExampleModels } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example-list-container',
  templateUrl: './example-list.container.html',
  styleUrls: ['./example-list.container.scss']
})
export class ExampleListContainer implements OnInit {

  exampleList$ : Observable<ExampleModels.ExampleItem[]>;
  filterOptions: ExampleModels.ExampleFilterOptions;
  sortOptions: ExampleModels.ExampleSortOption;

  constructor(
    private exampleFacade: ExampleFacade
  ) {
    this._bootstrap()
  }

  private _bootstrap(){
    this.filterOptions = {
      searchText: '',
      exampleStatus: ['done'],
      createdAtFrom: 0,
      createdAtTo: 0
    }
    this.sortOptions = {
      field: 'name',
      type: 'asc'
    }
  }

  ngOnInit(): void {
    this.exampleList$ = this.exampleFacade.exampleList$
    // fetch
    this.exampleFacade.find(this.filterOptions, this.sortOptions);
  }

}
