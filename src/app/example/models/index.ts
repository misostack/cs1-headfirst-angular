// entities
import { ExampleFacade } from './example.facade';

declare namespace ExampleModels {
  type ExampleItemStatus = 'pending' | 'assigned' | 'inprogress'
  | 'tobetested' | 'done' | 'archived';

  type ExampleSortField = 'title' | 'name';
  type ExampleSortType = 'asc' | 'desc';

  interface ExampleItem {
    readonly id: string;
    title: string;
    description?: string;
    status?: ExampleItemStatus;
    createdAt?: number;
    updatedAt?: number;
  }

  interface ExampleFilterOptions {
    exampleStatus: Array<ExampleItemStatus>;
    searchText: string; // searh in title and and description
    createdAtFrom: number;
    createdAtTo: number;
  }

  interface ExampleSortOption {
    field: ExampleSortField;
    type: ExampleSortType;
  }

  type ExampleList = {items: Array<ExampleModels.ExampleItem>, pagination: any}
}

export{
  ExampleModels,
  ExampleFacade
}
