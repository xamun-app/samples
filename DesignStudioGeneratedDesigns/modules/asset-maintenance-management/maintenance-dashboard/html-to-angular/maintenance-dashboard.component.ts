import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MaintenanceDashboardService } from './maintenance-dashboard.service';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-maintenance-dashboard',
  templateUrl: './maintenance-dashboard.component.html',
  styleUrls: ['./maintenance-dashboard.component.scss']
})
export class MaintenanceDashboardComponent implements OnInit, AfterViewInit {
  scheduledTasks = 0;
  ongoingTasks = 0;
  overdueTasks = 0;
  completedTasks = 0;
  recentActivities: any[] = [];

  constructor(private dashboardService: MaintenanceDashboardService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngAfterViewInit(): void {
    this.createCharts();
  }

  loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.scheduledTasks = data.scheduledTasks;
      this.ongoingTasks = data.ongoingTasks;
      this.overdueTasks = data.overdueTasks;
      this.completedTasks = data.completedTasks;
      this.recentActivities = data.recentActivities;
    });
  }

  viewDetails(activity: any): void {
    // Implement view details logic
    console.log('View details for:', activity);
  }

  private createCharts(): void {
    this.createMaintenanceChart();
    this.createAssetTypeChart();
  }

  private createMaintenanceChart(): void {
    const data = [{
      values: [this.scheduledTasks, this.ongoingTasks, this.overdueTasks, this.completedTasks],
      labels: ['Scheduled', 'Ongoing', 'Overdue', 'Completed'],
      type: 'pie',
      marker: {
        colors: ['#007bff', '#28a745', '#ffc107', '#17a2b8']
      }
    }];

    const layout = {
      height: 300,
      margin: { t: 0, b: 0, l: 0, r: 0 },
      showlegend: false
    };

    Plotly.newPlot('maintenanceChart', data, layout);
  }

  private createAssetTypeChart(): void {
    const data = [{
      x: ['Vehicle', 'Equipment', 'Facility', 'IT Asset'],
      y: [15, 30, 10, 25],
      type: 'bar',
      marker: {
        color: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
      }
    }];

    const layout = {
      height: 300,
      margin: { t: 0, b: 40, l: 40, r: 0 },
      xaxis: { title: 'Asset Type' },
      yaxis: { title: 'Count' }
    };

    Plotly.newPlot('assetTypeChart', data, layout);
  }
}
