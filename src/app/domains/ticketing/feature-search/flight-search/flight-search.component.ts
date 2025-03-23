import { Component, inject, linkedSignal } from '@angular/core';
import { FlightStore } from '../flight.store';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

// import { CheckinService } from '@my-project/checkin/data/checkin.service';
// import { InternalService } from '@my-project/shared/util-auth/internal/internal.service';

@Component({
  selector: 'app-flight-search',
  imports: [FormsModule, JsonPipe],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {
  private flightStore = inject(FlightStore);

  readonly flightResource = this.flightStore.flightResource;
  readonly from = linkedSignal(() => this.flightStore.from());
  readonly to = linkedSignal(() => this.flightStore.to());

  load() {
    console.log('load');
    this.flightStore.load(this.from(), this.to());
  }

  // Not allowed
  // private internalService = inject(InternalService);
  // private checkinService = inject(CheckinService);
}

// Manfred was here
