import * as uuid from 'uuid/v1';

export enum CarModel {
  Tesla = 'Tesla',
  Ford = 'Ford',
  Nissan = 'Nissan',
  BMW = 'BMW',
}

export class Car {
  constructor(
    public title: string,
    public model: CarModel | string,
    public description: string,
    public date: Date,
    public id?: number,
  ) {
    if (!id) {
      this.id = uuid();
    }
  }
}

export interface IHoldCars {
  cars: Car[];
}
