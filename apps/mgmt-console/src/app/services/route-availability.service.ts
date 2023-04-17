import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {map, Observable, of, take} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RouteAvailabilityService {
  constructor(private router: Router) {
  }

  public redirectToUserHomePage(): Observable<boolean> {
    return this.getUserHomeRoute().pipe(
      map(page => {
        this.router.navigate([page]).catch(_ => console.log(_));
        return false;
      })
    );
  }

  public getUserHomeRoute(): Observable<string> {
    return of('/alerts').pipe(take(1));
  }
}
