
import { Routes } from "@angular/router";

const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    {path: 'dynamic', loadComponent: () => import('./dynamic-chart/dynamic-chart.component').then(m => m.DynamicChartComponent) },
    {path: 'static', loadComponent: () => import('./static-chart/static-chart.component').then(m => m.StaticChartComponent) },
]