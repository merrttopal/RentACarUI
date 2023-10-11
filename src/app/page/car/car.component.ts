import { Car } from 'src/app/shared/models/car';
import { CarService } from './../../shared/services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  textFilter: string;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarByBrand(params['id']);
      } else {
      }
    });
    this.getCars();
  }

  getCars() {
    this.carService.getAllCar().subscribe((response) => {
      this.cars = response;
    });
  }

  getCarByBrand(brandId: number) {
    this.carService.getCarByBrand(brandId).subscribe((response) => {
      this.cars = response;
    });
  }
}
