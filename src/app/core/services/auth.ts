import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isLoggedInSignal = signal(false);
  
  constructor() { }

  public login(userName: string, passWord: string): boolean {
    if(userName ==='admin' && passWord === 'admin@123') {
      this.isLoggedInSignal.set(true);

      return true;
    }

    return false;
  }

  public isAuthenticated(): boolean {
    return this.isLoggedInSignal();
  }
}
