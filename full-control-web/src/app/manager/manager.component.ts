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
        }
    );
  }

  turnMotor(){
    this.managerService.turnMotor().subscribe(
        data => {
            this.varTurnMotor.msg = data;
        }
    );
  }

  controlMotorUp(){
    this.managerService.controlMotorUp().subscribe(
        data => {
            this.varTurnMotor.msg = data;
        }
    );
  }

  controlMotorDown(){
    this.managerService.controlMotorDown().subscribe(
        data => {
            this.varTurnMotor.msg = data;
        }
    );
  }

}
