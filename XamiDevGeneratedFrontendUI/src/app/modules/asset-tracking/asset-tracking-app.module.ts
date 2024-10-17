import { NgModule } from '@angular/core';
import { MaterialExampleModule } from './asset-tracking-material.module';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AssetTrackingAppComponent } from './asset-tracking-app.component';
import { AssetTrackingAppRoutingModule } from './asset-tracking-app.routing.module';
import { AssetDetailsComponent } from './asset-details/asset-details.component';

@NgModule({
    declarations: [AssetTrackingAppComponent, AssetDetailsComponent],
    imports: [CommonModule, MaterialExampleModule, HttpClientModule, AssetTrackingAppRoutingModule],
    providers: [HttpClient]
})

export class AssetTrackingAppModule { }