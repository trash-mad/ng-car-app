import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Car } from '../../_models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;
  @Output() delete = new EventEmitter<Car>();
  onDelete() {
    this.delete.emit(this.car);
  }
}
