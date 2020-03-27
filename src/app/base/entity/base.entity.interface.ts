export interface BaseEntityInterface {
  id: string | null;
  createdAt: Date;
  updatedAt: Date;
  getEndPoint(): string;
}
