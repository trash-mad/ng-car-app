import { Component } from '@angular/core';
import { IHoldCars, Car } from './_models/car.model';
import { CarModel } from './_enums/CarModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements IHoldCars {
  public cars: Car[] = [
    new Car('CyberTruck', CarModel.Tesla, 'lorem ipsumdscdsv', new Date()),
    new Car('CyberTruc2', CarModel.Tesla, 'lorem ipsumsdsfsf', new Date()),
    new Car('CyberTruc3', CarModel.Tesla, 'lorem ipsumdsfdsf', new Date()),
  ];
}
