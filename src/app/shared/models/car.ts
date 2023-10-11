import { Model } from './model';
export interface Car{
    id:number,
    plate:string,
    dailyPrice:number,
    modelYear:number,
    state:number,
   // modelId:number,
    model:Model
}