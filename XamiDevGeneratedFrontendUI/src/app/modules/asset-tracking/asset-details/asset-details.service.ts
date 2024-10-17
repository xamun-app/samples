import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, timeout, map } from "rxjs/operators";

export interface AssetDetails {
  assetId: string;
  assetName: string;
  category: string;
  purchaseDate: string;
  purchasePrice: number;
  currentLocation: string;
  assignedTo: string;
  warranty: {
    provider: string;
    type: string;
    startDate: string;
    endDate: string;
    coverageDetails: string;
  };
  maintenanceRecords: Array<{
    date: string;
    type: string;
    description: string;
    cost: number;
  }>;
}

export interface ActionElement {
  text: string;
  class: string;
  action: string;
}

@Injectable({
  providedIn: 'root'
})
export class AssetDetailsService {
  private actionElementsUrl = ' https://dummyjson.com/c/1833-0b80-4dd5-94f2';
  private apiUrl = 'https://dummyjson.com/c/f786-0a1e-41df-862b';

  constructor(private http: HttpClient) {}

  getAssetDetails(): Observable<AssetDetails> {
    return this.http.get<AssetDetails>(this.apiUrl).pipe(
      timeout(10000), // 10 seconds timeout
      catchError(this.handleError)
    );
  }

  getActionElements(): Observable<ActionElement[]> {
    return this.http.get<{ elements: ActionElement[] }>(this.actionElementsUrl).pipe(
      timeout(5000), // 5 seconds timeout
      map(response => response.elements),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
