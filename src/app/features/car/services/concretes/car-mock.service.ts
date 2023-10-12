import { Injectable } from '@angular/core';
import { CarAbsractService } from '../abstracts/car-absract.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarMockService implements CarAbsractService{

  private apiUrl = "http://localhost:3000/cars"

  cars:Car[];

  constructor(private httpClient:HttpClient) { }
  
  getCarByBrand(brandId:number): Observable<Car[]>{

    let url = `${this.apiUrl}?model.brandId=${brandId}`;
    return this.httpClient.get<Car[]>(url);

  }

  getCarList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl)
  }

  
  
}






// getCarList(): Observable<Car[]> {
//   this.httpClient.get<Car[]>(this.apiUrl).subscribe({

//    next:(data)=>{
//      //gelecek değerler
//      return data;
     
//    },error:(error)=>{
//      //hata mesajları
//    },complete:()=>{
     
//    }
//   })
//  }