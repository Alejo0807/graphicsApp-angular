import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [

  ];
  doughnutChartType: ChartType = 'doughnut';

  colors: Color[] = [
    {
      backgroundColor: ['#F2356E','#9C38FC','#3D79E6','#38FCD4','#8AF779']
    }
  ]

  constructor(private graphicsService: GraphicsService) { }

  ngOnInit(): void {

    // this.graphicsService.getCantUsers()
    //   .subscribe( data => {
    //     this.doughnutChartLabels = Object.keys(data);
        
    //     // console.log(this.doughnutChartLabels)
    //     this.doughnutChartData.push(Object.values(data))
    //     console.log(Object.values(data));
        
    //   })

    this.graphicsService.getCantUsersData()
    .subscribe(data => {
      this.doughnutChartLabels = data.keys;
      this.doughnutChartData.push(data.values)
      })
      
  }

}
