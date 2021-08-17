import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bars-double',
  templateUrl: './bars-double.component.html',
  styles: [
  ]
})
export class BarsDoubleComponent implements OnInit {

  providerData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Vendedor A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Vendedor B' },
  ];

  barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  
  productData: ChartDataSets[] = [
    { data: [200, 200, 300, 150, 200, 600, 250], label: 'Cars' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
