import { Component, inject } from '@angular/core';
import { FlightService } from '@my-project/ticketing/data/flight.service';
import { AuthService } from '@my-project/shared/util-auth/auth.service';

// import { InternalService } from '@my-project/shared/util-auth/internal/internal.service';
import { DefaultStrategy } from '@my-project/shared/util-auth/strategies/default-strategy';
// import { CheckinService } from '@my-project/checkin/data/checkin.service';

@Component({
  selector: 'app-flight-search',
  imports: [],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);
  private authService = inject(AuthService);
  private strategy = inject(DefaultStrategy);

  // Not allowed
  // private internalService = inject(InternalService);
  // private checkinService = inject(CheckinService);
}

// Manfred was here
