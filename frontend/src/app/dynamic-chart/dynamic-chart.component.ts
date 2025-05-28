import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { PerformanceService } from '../services/performance.service';

@Component({
  selector: 'app-dynamic-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './dynamic-chart.component.html',
  styleUrl: './dynamic-chart.component.css'
})
export class DynamicChartComponent implements OnInit, AfterViewInit {
  memoryChartOption: any;
  cpuChartOption: any;
  memoryLoading = true;
  cpuLoading = true;
  memoryError: string | null = null;
  cpuError: string | null = null;

  memoryType: 'used' | 'free' = 'used';
  availableMemoryTypes = [
    { value: 'used', label: 'Used Memory' },
    { value: 'free', label: 'Free Memory' }
  ];

  constructor(private performanceService: PerformanceService) { }

  ngOnInit(): void {
    this.loadMemoryChartData();
    this.loadCpuChartData();
  }

  ngAfterViewInit(): void {}

  onMemoryTypeChange(type: 'used' | 'free'): void {
    this.memoryType = type;
    this.loadMemoryChartData();
  }

  handleMemoryTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue === 'used' || selectedValue === 'free') {
      this.onMemoryTypeChange(selectedValue);
    } else {
      console.warn('Invalid memory type selected:', selectedValue);
    }
  }

  loadMemoryChartData(): void {
    this.memoryLoading = true;
    this.memoryError = null;

    const dataObservable = this.memoryType === 'used'
      ? this.performanceService.getUsedMemory()
      : this.performanceService.getFreeMemory();

    dataObservable.subscribe({
      next: data => {
        const xAxisData = data.map(d => d.index + 1);
        const yAxisData = data.map(d => d.value);

        this.memoryChartOption = {
          title: {
            text: this.memoryType === 'used'
              ? "Memory Usage Over Past 1 Minute"
              : "Free Memory Over Past 1 Minute"
          },
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: xAxisData, name: "Time (seconds)" },
          yAxis: { type: "value", name: "Memory (MB)" },
          series: [{ data: yAxisData, type: "line", smooth: true }]
        };
        this.memoryLoading = false;
      },
      error: err => {
        this.memoryError = "Error loading memory chart data";
        console.error(err);
        this.memoryLoading = false;
      }
    });
  }

  loadCpuChartData(): void {
    this.cpuLoading = true;
    this.cpuError = null;

    this.performanceService.getCpuUsage().subscribe({
      next: data => {
        const xAxisData = data.map(d => d.index + 1);
        const yAxisData = data.map(d => d.value);

        this.cpuChartOption = {
          title: {
            text: "CPU Usage Over Past 1 Minute"
          },
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: xAxisData, name: "Time (seconds)" },
          yAxis: { type: "value", name: "CPU Usage (%)" },
          series: [{ data: yAxisData, type: "line", smooth: true }]
        };
        this.cpuLoading = false;
      },
      error: err => {
        this.cpuError = "Error loading CPU chart data";
        console.error(err);
        this.cpuLoading = false;
      }
    });
  }
}
