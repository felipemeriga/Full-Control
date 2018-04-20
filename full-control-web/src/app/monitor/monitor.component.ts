import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

    public chart;
    public dataset: Array<any>;
    public labels: Array<any>;
    public colors: Array<any>;

    ngOnInit() {
        this.chart = 'line';
        this.dataset = [
            {data: [200, 185, 52, 196 , 96, 120], label: 'Sala de Estar'},
            {data: [100, 75, 152, 96 , 110, 20], label: 'Cozinha'},
            {data: [300, 105, 85, 10 , 45, 140], label: 'Quarto 1'},
            {data: [150, 120, 20, 230 , 15, 80], label: 'Banheiro'},
        ];
        this.labels = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

        this.colors = [
            { // black
              borderColor: 'rgb(0, 0, 0)'
            },
            { // blue
              borderColor: 'rgb(34, 22, 170)'
            },
            { // green
              borderColor: 'rgb(7,89,27)'
            },
            { // red
              borderColor: 'rgb(198, 51, 51)'
            },
        ];
    }
}
