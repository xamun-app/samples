import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../../../api-authorization/authorize-guard';
import { AssetMaintenanceManagementAppComponent } from './asset-maintenance-management-app.component';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';


const routes: Routes = [
    {
      path: '',
      component: AssetMaintenanceManagementAppComponent,
      children: [
        {
          path: 'dashboard',
          component: MaintenanceDashboardComponent
        },
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetMaintenanceManagementAppRoutingModule {}