import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal('');
  readonly user = this._user.asReadonly();

  // Login for honest people TM
  login(user: string): void {
    this._user.set(user);
  }
}
