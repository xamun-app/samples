import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceDashboardService {
  constructor() { }

  getDashboardData(): Observable<any> {
    // Mock data - replace with actual API call
    const mockData = {
      scheduledTasks: 24,
      ongoingTasks: 8,
      overdueTasks: 3,
      completedTasks: 56,
      recentActivities: [
        {
          asset: 'Forklift #3',
          type: 'Vehicle',
          status: 'Ongoing',
          priority: 'High',
          dueDate: '2023-06-15'
        },
        {
          asset: 'CNC Machine #2',
          type: 'Equipment',
          status: 'Scheduled',
          priority: 'Medium',
          dueDate: '2023-06-20'
        },
        {
          asset: 'HVAC System',
          type: 'Facility',
          status: 'Overdue',
          priority: 'Critical',
          dueDate: '2023-06-10'
        }
      ]
    };

    return of(mockData);
  }
}
