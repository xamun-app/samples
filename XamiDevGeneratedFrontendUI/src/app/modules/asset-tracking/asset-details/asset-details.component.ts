import { Component, OnInit } from "@angular/core";
import { AssetDetailsService, AssetDetails, ActionElement } from "./asset-details.service";
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {
  assetDetails: AssetDetails | null = null;
  actionElements: ActionElement[] = [];
  loading = false;
  error: string | null = null;

  constructor(private assetDetailsService: AssetDetailsService) {}

  ngOnInit(): void {
    this.getAssetDetails();
    this.getActionElements();
  }

  getAssetDetails(): void {
    this.loading = true;
    this.error = null;
    this.assetDetailsService.getAssetDetails()
      .pipe(
        catchError(error => {
          this.error = 'An error occurred while fetching asset details. Please try again later.';
          console.error('Error fetching asset details:', error);
          return of(null);
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (data: AssetDetails | null) => {
          this.assetDetails = data;
        }
      );
  }

  getActionElements(): void {
    this.assetDetailsService.getActionElements()
      .pipe(
        catchError(error => {
          console.error('Error fetching action elements:', error);
          this.error = 'An error occurred while fetching action elements. Please try again later.';
          return of([]);
        })
      )
      .subscribe(
        (elements: ActionElement[]) => {
          this.actionElements = elements;
        }
      );
  }

  onActionClick(action: string): void {
    console.log(`Action clicked: ${action}`);
    // Here you would typically dispatch an action or call a service method
    // based on the action type. For example:
    switch(action) {
      case 'edit':
        // this.router.navigate(['/edit-asset', this.assetDetails.assetId]);
        break;
      case 'delete':
        // this.deleteAsset();
        break;
      case 'maintenance':
        // this.scheduleMaintenanceService.openScheduleDialog(this.assetDetails.assetId);
        break;
      default:
        console.warn(`Unhandled action: ${action}`);
    }
  }

  // Additional methods for handling specific actions can be added here
}
