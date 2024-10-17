
        import { NgModule } from '@angular/core';
        import { Routes, RouterModule } from '@angular/router';
        export const routes: Routes = [
          {
            path: '',
            redirectTo: 'asset-maintenance-management',
            pathMatch: 'full'
          },
          {
              path: 'asset-maintenance-management',
              loadChildren: () => import('./modules/asset-maintenance-management/asset-maintenance-management-app.module').then((m) => m.AssetMaintenanceManagementAppModule)
          },
          {
            path: 'asset-tracking',
            loadChildren: () => import('./modules/asset-tracking/asset-tracking-app.module').then((m) => m.AssetTrackingAppModule)
        },
          { path: '**', redirectTo: 'error/404' }
        ];

        @NgModule({
          imports: [
            RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
          ],
          exports: [RouterModule],
        })
        export class AppRoutingModule {}