import { Routes } from '@angular/router';
import { FlightSearchComponent } from './domains/ticketing/feature-search/flight-search/flight-search.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: FlightSearchComponent
    }
];
