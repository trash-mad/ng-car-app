import { CarModel } from '../_enums/CarModel';

export class Car {
  constructor(
    public title: string,
    public model: CarModel,
    public description: string,
    public date: Date,
    public id?: number,
  ) {
  }
}

export interface IHoldCars {
  cars: Car[];
}
