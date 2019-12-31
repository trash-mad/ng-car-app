import { Component, ViewChild, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarModel } from '../_enums/CarModel';

import * as faker from 'faker';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {

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
        ]
      ),
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
      description: faker.lorem.words(25),
    });
  }

  submit() {
    console.log('submit')
  }
}
