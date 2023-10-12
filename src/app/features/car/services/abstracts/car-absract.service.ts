import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';

@Injectable({
  providedIn: 'root'
})
export abstract class CarAbsractService {
  

  abstract getCarList():Observable<Car[]>;
  abstract getCarByBrand(brandId:number):Observable<Car[]>;
 

}
