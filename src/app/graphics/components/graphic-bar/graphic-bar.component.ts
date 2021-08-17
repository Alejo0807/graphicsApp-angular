import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styles: [
  ]
})
export class GraphicBarComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  
  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
    
    
  }



}
