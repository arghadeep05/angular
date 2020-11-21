import { Injectable } from "@angular/core";
import { BOATS } from "./boats/mock-boat";
import { Boat } from "./boats/boat";
import { Http } from "@angular/http";

@Injectable()
export class BoatService {

  boatList:Boat[] = BOATS;

  constructor(private http: Http){

  }
// http.get(url);
// http.get(url/para);
// http.get(url?para);
// http.post(url,data);
// http.put(url,data);
// http.delete(url/para);

  getAllBoats(): Promise<Boat[]> {

    return this.http.get('http://localhost:2222/SeaQueenBoats/sqbBoats/boatsAll')
    .toPromise()
    .then(response=>response.json() as Boat[])
    .catch(this.errorHandler);
    }

    private errorHandler(error:any):Promise<any> {
    console.error("Error occured",error);
    return Promise.reject(error.message || error);
    }

 createDelay():Boat[]{
     var start = new Date().getTime();
     var end = start;
     while(end < start + 5000) {
         end = new Date().getTime();
     }
     return BOATS;
 }
 getLocations():Promise<string[]> {
  return Promise.resolve(['Allepey', 'Kumarkom', 'Srinagar', 'Goa', 'Kochi', 'Asan Barrage']);
}
getBoatTypes(): Promise<string[]> {
  return Promise.resolve(['Houseboat', 'Cruiser', 'Bass Boat', 'Speed Boat', 'Power Catamaran']);
}

updateBoat(updatedBoat:Boat):Promise<Boat> {
  const url = 'http://localhost:2222/SeaQueenBoats/sqbBoats/boatUpdate'; //Line 2
  return this.http.put(url, updatedBoat ) //Line 3
  .toPromise()
  .then(
  (res) => res.json() as Boat
  ).catch(this.errorHandler);
}
addBoat(boatToAdd:Boat):Promise<Boat>{
  const url = 'http://localhost:2222/SeaQueenBoats/sqbBoats/boatAdd';
  return this.http.post(url, boatToAdd)//Line 1
                  .toPromise() //Line 2
                  .then((response)=> <Boat> response.json()) //Line 3
                  .catch(this.errorHandler); //Line 4
}

 getAllBoatUsingPromise():Promise<Boat[]>{
  let boatPromiseData:Promise<Boat[]>= new Promise(resolve=>{
    setTimeout(()=>resolve(BOATS),5000)
  });
  return boatPromiseData;
}
}
