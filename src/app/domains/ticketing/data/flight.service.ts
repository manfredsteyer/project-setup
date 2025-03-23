import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Flight } from './flight';

@Injectable({ providedIn: 'root' })
export class FlightService {
  find(
    from: Signal<string>,
    to: Signal<string>,
    active: Signal<boolean>,
  ): HttpResourceRef<Flight[]> {
    return httpResource<Flight[]>(
      () =>
        !active()
          ? undefined
          : {
              url: 'http://demo.angulararchitects.io/api/flight',
              params: { from: from(), to: to() },
              headers: { accept: 'application/json' },
            },
      { defaultValue: [] },
    );
  }
}
