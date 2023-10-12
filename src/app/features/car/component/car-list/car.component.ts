import { Car } from 'src/app/shared/models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarAbsractService } from '../../services/abstracts/car-absract.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  textFilter: string;
  current:Car;

  constructor(
    
    private carAbstractService:CarAbsractService,
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
    this.carAbstractService.getCarList().subscribe((response) => {
      this.cars = response;})
  }

  getCarByBrand(brandId: number) {
    this.carAbstractService.getCarByBrand(brandId).subscribe((response) => {
      this.cars = response;
    });
  }

  currentCar(car:Car):void {
    this.current = car;
    console.log(this.current);
  }
}
