import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';


@Injectable({
  providedIn: 'root',
})
export class CvResolver implements Resolve<Cv | null> {
  constructor() {}
  private cvService: CvService = inject(CvService)
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cv | null> {
    const id = route.params['id'];
    return this.cvService.getCvById(+id).pipe(
      catchError((error) => {
        console.error('Error fetching CV', error);
        return of(null); // Return a default value or null in case of error
      })
    );
  }
}