import { Component } from '@angular/core';
import { Financial } from './services/financial';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [NgxEchartsDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  assetOption: any;
  performanceOption: any;
  marketOption: any;

  constructor(private dashboardService: Financial) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe((data) => {
      this.assetOption = {
        title: { text: 'Asset Allocation', left: 'center' },
        tooltip: { trigger: 'item' },
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: data.assetAllocation,
          },
        ],
      };

      this.performanceOption = {
        title: { text: 'Portfolio Performance', left: 'center' },
        xAxis: {
          type: 'category',
          data: data.performanceOverTime.map((d: any) => d.month),
        },
        yAxis: { type: 'value' },
        series: [
          {
            data: data.performanceOverTime.map((d: any) => d.value),
            type: 'line',
            smooth: true,
          },
        ],
      };

      this.marketOption = {
        title: { text: 'Market Trends', left: 'center' },
        xAxis: { type: 'category', data: data.marketTrends.map((d: any) => d.name) },
        yAxis: { type: 'value' },
        series: [
          {
            data: data.marketTrends.map((d: any) => d.value),
            type: 'bar',
          },
        ],
      };
    });
  }
}
