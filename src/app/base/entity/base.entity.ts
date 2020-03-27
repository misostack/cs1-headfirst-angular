import { BaseEntityInterface } from './base.entity.interface';

export declare abstract class BaseEntity implements BaseEntityInterface {
  id: string | null;
  createdAt: Date;
  updatedAt: Date;
  getEndPoint(): string;
}
