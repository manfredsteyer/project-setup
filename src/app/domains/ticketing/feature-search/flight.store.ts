import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { FlightService } from '../data/flight.service';

export const FlightStore = signalStore(
  { providedIn: 'root' },
  withProps(() => ({
    _flightService: inject(FlightService),
  })),
  withState(() => ({
    from: '',
    to: '',
    active: false,
  })),
  withProps((store) => ({
    _flightResource: store._flightService.find(
      store.from,
      store.to,
      store.active,
    ),
  })),
  withProps((store) => ({
    flightResource: store._flightResource.asReadonly(),
  })),
  withMethods((store) => ({
    load(from: string, to: string): void {
      patchState(store, () => ({
        from,
        to,
        active: true,
      }));
      store.flightResource.reload();
    },
  })),
);
