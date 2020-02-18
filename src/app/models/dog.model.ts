export interface DogModel {
  id?: number;
  name: string;
  description?: string;
  userId?: number;
  unMatchedDogs?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
