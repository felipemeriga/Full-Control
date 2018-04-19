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
            {data: [200, 185, 52, 196 , 95, 120], label: 'Volts'}
        ];
        this.labels = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

        this.colors = [
            { // blue
              borderColor: 'rgb(31,119,180)',
              backgroundColor: 'rgba(31,119,180,0.5)'
            }
        ];
    }
}
