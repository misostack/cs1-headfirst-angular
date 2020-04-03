import { BaseApiInterface } from '..';

export interface BaseEntityInterface {
  id: string | null;
  createdAt: Date;
  updatedAt: Date;
  getEndPoint(): string;
}

export interface BaseEntityProviderInterface {
  name: string;
  entity: BaseApiInterface;
}
