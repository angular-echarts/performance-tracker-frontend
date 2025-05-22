import { Component, OnInit } from '@angular/core';
import { WinProbabilityService } from '../services/win-probability.service'; // Adjust path
import { WinProbability } from '../models/win-probability.model';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-static-chart',
  templateUrl: './static-chart.component.html',
  styleUrl: './static-chart.component.css',
  imports: [NgxEchartsModule],
})
export class StaticChartComponent implements OnInit {
  chartOptions: any;
  beforeProbabilities: WinProbability[] = [];
  afterProbabilities: WinProbability[] = [];

  constructor(private winProbabilityService: WinProbabilityService) { }

  ngOnInit() {
    this.beforeProbabilities = this.winProbabilityService.getWinProbabilitiesBeforeLeagueMatches();
    this.afterProbabilities = this.winProbabilityService.getWinProbabilitiesAfterTournamentConclusion();

    // Extract years for X axis (assuming years are same for both datasets)
    const years = this.beforeProbabilities.map(item => item.year);

    // Prepare data for series with extra info on the "before" dataset for tooltips
    const beforeData = this.beforeProbabilities.map(item => ({
      value: item.percentage,
      year: item.year,
      percentage: item.percentage,
      description: item.description
    }));

    const afterData = this.afterProbabilities.map(item => ({
      value: item.percentage,
      year: item.year,
      percentage: item.percentage,
      description: '' // no description for after data
    }));

    this.chartOptions = {
      title: {
        text: 'Win Probabilities Before and After Tournament',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          // params is an array of data points for each series at hovered year
          // We want to show both lines data; description only for before line
          let tooltip = `Year: <strong>${params[0].data.year}</strong><br/>`;

          params.forEach((p: any) => {
            const lineName = p.seriesName;
            const perc = p.data.percentage;
            tooltip += `${lineName}: <strong>${perc}%</strong>`;
            if (lineName === 'Before Tournament' && p.data.description) {
              tooltip += `<br/>Description: ${p.data.description}`;
            }
            tooltip += '<br/>';
          });
          return tooltip;
        },
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['Before Tournament', 'After Tournament'],
        top: 30
      },
      xAxis: {
        type: 'category',
        data: years,
        name: 'Year'
      },
      yAxis: {
        type: 'value',
        name: 'Win Probability (%)',
        min: 0,
        max: 100,
        axisLabel: {
          formatter: '{value} %'
        }
      },
      series: [
        {
          name: 'Before Tournament',
          type: 'line',
          data: beforeData,
          smooth: true,
          lineStyle: { width: 3, color: '#5470C6' },
          itemStyle: { color: '#5470C6' },
          symbolSize: 8
        },
        {
          name: 'After Tournament',
          type: 'line',
          data: afterData,
          smooth: true,
          lineStyle: { width: 3, color: 'red' },
          itemStyle: { color: 'red' },
          symbolSize: 8
        }
      ]
    };
  }
}
