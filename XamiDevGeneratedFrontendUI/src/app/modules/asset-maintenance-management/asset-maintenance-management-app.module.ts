import { NgModule } from '@angular/core';
import { MaterialExampleModule } from './asset-maintenance-management-material.module';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AssetMaintenanceManagementAppRoutingModule } from './asset-maintenance-management-app-routing.module';
import { AssetMaintenanceManagementAppComponent } from './asset-maintenance-management-app.component';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';

@NgModule({
    declarations: [AssetMaintenanceManagementAppComponent, MaintenanceDashboardComponent],
    imports: [CommonModule, MaterialExampleModule, HttpClientModule, AssetMaintenanceManagementAppRoutingModule],
    providers: [HttpClient]
})

export class AssetMaintenanceManagementAppModule { }