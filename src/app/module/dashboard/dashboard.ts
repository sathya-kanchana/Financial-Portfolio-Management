import { Component } from '@angular/core';
import { Financial } from './services/financial';
import { NgxEchartsDirective } from 'ngx-echarts';
import { DashboardData } from './model/dashboard.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  public assetOption!: echarts.EChartsOption;
  public performanceOption!: echarts.EChartsOption;
  public marketOption!: echarts.EChartsOption;

  constructor(private dashboardService: Financial) {}

  ngOnInit(): void {
    this.getFinancial();
  }

  public getFinancial(): void {
    this.dashboardService.getDashboardData().subscribe((data: DashboardData) => {
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
          data: data.performanceOverTime.map(d => d.month),
        },
        yAxis: { type: 'value' },
        series: [
          {
            data: data.performanceOverTime.map(d => d.value),
            type: 'line',
            smooth: true,
          },
        ],
      };

      this.marketOption = {
        title: { text: 'Market Trends', left: 'center' },
        xAxis: {
          type: 'category',
          data: data.marketTrends.map(d => d.name),
        },
        yAxis: { type: 'value' },
        series: [
          {
            data: data.marketTrends.map(d => d.value),
            type: 'bar',
          },
        ],
      };
    });
  }
}

