import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, throwError, map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PerformanceService {
  private memoryUrl = 'https://two9-04-2025-echarts-performance-tracker.onrender.com/api/memorymetrics/'; // Adjust the URL as needed
  private cpuUrl = 'https://two9-04-2025-echarts-performance-tracker.onrender.com/api/cpumetrics/'; // Adjust the URL as needed


  constructor(private http: HttpClient) { }

  getUsedMemory() {
    return this.http.get<number[]>(`${this.memoryUrl}usedmemory`).pipe(
      map(data => data.map((value, index) => ({ index, value }))),
      catchError(error => {
        console.error('Error fetching used memory data:', error);
        return throwError(() => error);
      })
    );
  }

  getFreeMemory() {
    return this.http.get<number[]>(`${this.memoryUrl}freememory`).pipe(
      map(data => data.map((value, index) => ({ index, value }))),
      catchError(error => {
        console.error('Error fetching used memory data:', error);
        return throwError(() => error);
      })
    );
  }

  getCpuUsage() {
    return this.http.get<number[]>(`${this.cpuUrl}cpuusage`).pipe(
      map(data => data.map((value, index) => ({ index, value }))),
      catchError(error => {
        console.error('Error fetching CPU usage data:', error);
        return throwError(() => error);
      })
    );
  }
}
