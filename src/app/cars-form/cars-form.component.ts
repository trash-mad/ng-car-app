import { Component, EventEmitter, Renderer2, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as faker from 'faker';
import { Car, CarModel } from '../../_models/car.model';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {

  @Output()
  carAdded = new EventEmitter<Car>();

  avalibleCars: string[] = [];
  form: FormGroup;

  constructor(private renderer: Renderer2) {
    Object.keys(CarModel)
      .filter(key => isNaN(Number(key)))
      .forEach(key => {
        this.avalibleCars.push(key);
      });
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(25)
      ])
    });
  }

  applyTempDate() {
    this.form.patchValue({
      description: faker.lorem.words(25)
    });
  }

  submit() {
    const { title, model, description } = this.form.value;
    this.carAdded.emit(new Car(title, model, description, new Date()));
    this.form.reset();
  }
}
