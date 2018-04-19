import { Component, OnInit } from '@angular/core';
import { ManagerService } from './service/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  ngOnInit() {
  }

  turn(){
      this.managerService.turn(true);
  }

}
