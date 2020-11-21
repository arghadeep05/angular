import { Component, OnInit } from '@angular/core';
import { Boat } from './boat';
import { BOATS } from './mock-boat';
import { BoatService } from '../boat.service';

@Component({
  selector: 'boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

show: boolean = false;
boatData: Boat[];
displayBoat: Boat;
addBoatFlag = false; //Will be used to show or hide the add boat form
showDetailFlag = false; //Will be used to show or hide the boat detail table

  constructor( private boatService : BoatService) { }

  showBoat(boat: Boat) {
    this.showDetailFlag = this.showDetailFlag ? false : true;
    this.displayBoat = boat;
}


// Method is used to switch the value of variable to display add boat form

addBoat():void{
  this.addBoatFlag = true;
  this.showDetailFlag = false;
}



ngOnInit():void{
  this.boatService.getAllBoatUsingPromise().then(boats=>this.boatData=boats);
}

}
