import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({ providedIn: 'root' })
export class FlightService {
  find(from: string, to: string): HttpResourceRef<Flight[]> {
    return httpResource<Flight[]>(
      () => ({
        url: 'http://www.angulararchitects.io/demo/flight',
        params: { from, to },
        headers: { accept: 'application/json' },
      }),
      { defaultValue: [] },
    );
  }
}
