import { Component } from '@angular/core';
import { Car } from '../_models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cars: Car[] = [];
  constructor() {}
  onAdd(car: Car) {
    this.cars.push(car);
  }
  onDelete(car: Car) {
    this.cars = this.cars.filter((c) => c.id !== car.id);
  }
}
