import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Apache ECharts: Interactive, Customizable Charting Library for Modern Web Applications';

  description = `
    <strong>Apache ECharts</strong> is an open-source JavaScript visualization library for building interactive, highly customizable charts for the web.
    <strong>✨ Key Features:</strong><br/>
    • Wide variety of chart types<br/>
    • Smooth interactivity (tooltips, zoom, brush)<br/>
    • Fully customizable styles and themes<br/>
    • Responsive and high-performance rendering<br/>
    • Cross-browser and cross-platform compatibility<br/>
    • Declarative, data-driven configuration<br/>
    • Accessible and internationalization-ready<br/>
    • Modular and extensible architecture<br/><br/>
    Ideal for dashboards, real-time data monitoring, financial charts, and any rich web-based visualization needs.
  `;
}
