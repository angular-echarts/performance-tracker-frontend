import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  cpuInfo = `
    <h2><strong>🧠 What is a CPU?</strong><br/></h2>
    The <strong>CPU (Central Processing Unit)</strong> is the brain of a computer. It processes instructions, performs calculations, and manages tasks that keep your system running.
  `;

  ramInfo = `
    <h2><strong>💾 What is RAM?</strong><br/></h2>
    <strong>RAM (Random Access Memory)</strong> is a fast, temporary storage that holds data your system is actively using. More RAM means better multitasking and quicker application performance.
  `;
}
