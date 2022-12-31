import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css'],
})
export class FactoryComponent {
  // From: https://github.com/valor-software/ng2-charts

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [
    ['Planned', 'Downtime'],
    ['Unplanned', 'Downtime'],
    ['Not', 'Running'],
  ];
  public pieChartDatasets = [
    {
      data: [300, 300, 100],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
