import { Component, inject } from '@angular/core';
import { FlightService } from '../../data/flight.service';
import { AuthService } from '../../../shared/util-auth/auth.service';
// import { InternalService } from '../../../shared/util-auth/internal/internal.service';
import { DefaultStrategy } from '../../../shared/util-auth/strategies/default-strategy';
// import { CheckinService } from '../../../checkin/data/checkin.service';

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
