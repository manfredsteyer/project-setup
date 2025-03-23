import { TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { FlightSearchComponent } from './flight-search.component';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

fdescribe('FlightSearchComponent', () => {
  let ctrl: HttpTestingController;

  it('should search for flights', async () => {
    const user = userEvent.setup();

    await render(FlightSearchComponent, {
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    const fromField = await screen.findByPlaceholderText('from');
    const toField = await screen.findByPlaceholderText('to');
    const loadButton = await screen.findByText('Load');

    await user.type(fromField, 'Graz');
    await user.type(toField, 'Hamburg');
    await user.click(loadButton);

    ctrl = TestBed.inject(HttpTestingController);
    const request = ctrl.expectOne(
      'http://demo.angulararchitects.io/api/flight?from=Graz&to=Hamburg',
    );

    const date = new Date().toISOString();
    request.flush([
      { id: 7, from: 'Graz', to: 'Hamburg', date, delayed: false },
    ]);

    const result = await screen.findByText(/Graz/);
    expect(result).not.toBeNull();
  });
});
