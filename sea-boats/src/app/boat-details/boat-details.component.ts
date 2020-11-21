import { Component, OnInit, Input } from '@angular/core';
import { Boat } from '../boats/boat';

@Component({
  selector: 'boat-details',
  templateUrl: './boat-details.component.html',
  styleUrls: ['./boat-details.component.css']
})
export class BoatDetailsComponent implements OnInit {

  display:boolean=true;
  updateCheck:boolean=false;
  @Input()
  chosenBoat: Boat;
  constructor() { }

  ngOnInit() {
  }
  modifyVariablesOnClick(){
    this.display=false;
    this.updateCheck=true;
    }

}
