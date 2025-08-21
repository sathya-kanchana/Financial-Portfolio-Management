import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Financial {

  constructor() { }

  public getDashboardData(): Observable<any> {
    const mockData = {
      assetAllocation: [
        { name: 'Stocks', value: 55 },
        { name: 'Bonds', value: 25 },
        { name: 'Real Estate', value: 15 },
        { name: 'Cash', value: 5 },
      ],
      performanceOverTime: [
        { month: 'Jan', value: 10000 },
        { month: 'Feb', value: 12000 },
        { month: 'Mar', value: 14000 },
        { month: 'Apr', value: 13500 },
        { month: 'May', value: 16000 },
      ],
      marketTrends: [
        { name: 'Nifty 50', value: 2.3 },
        { name: 'Sensex', value: 1.8 },
        { name: 'S&P 500', value: 3.1 },
      ],
    };

    // simulate an API call with mock data
    return of(mockData);
  }
}
