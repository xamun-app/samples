import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../../../api-authorization/authorize-guard';
import { AssetTrackingAppComponent } from './asset-tracking-app.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';


const routes: Routes = [
    {
      path: '',
      component: AssetTrackingAppComponent,
      children: [
        {
          path: 'asset-details',
          component: AssetDetailsComponent
        },
        {path: '', redirectTo: 'asset-details', pathMatch: 'full'}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetTrackingAppRoutingModule {}