import { Component, OnInit } from '@angular/core';
import { ManagerService } from './service/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

    varTurnLed = {msg: "0"};
    varTurnMotor = {msg: "0"};

  constructor(private managerService: ManagerService) { }

  ngOnInit() {
  }

  turnLed(){
    this.managerService.turnLed().subscribe(
        data => {
            this.varTurnLed.msg = data;
            console.log(this.varTurnLed)
        }
    );
  }

  turnMotor(){
    this.managerService.turnMotor().subscribe(
        data => {
            this.varTurnMotor.msg = data;
            console.log(this.varTurnMotor)
        }
    );
  }

  controlMotor(){
    this.managerService.controlMotor().subscribe(
        data => {
            this.varTurnMotor.msg = data;
            console.log(this.varTurnMotor)
        }
    );
  }

}
