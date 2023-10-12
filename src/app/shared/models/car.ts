import { Model } from './model';
export interface Car{
    id:number,
    plate:string,
    dailyPrice:number,
    modelYear:number,
    state:number,
    imageUrl:string,
   // modelId:number,
    model:Model
}