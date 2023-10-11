
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = "http://localhost:3000/cars"

  constructor(private httpClient:HttpClient) { }
 

  getAllCar():Observable<Car[]>{
  
    return this.httpClient.get<Car[]>(this.apiUrl)
  }

  getCarByBrand(brandId:number): Observable<Car[]>{

    let url = `${this.apiUrl}?model.brandId=${brandId}`;
    return this.httpClient.get<Car[]>(url);

  }
}
