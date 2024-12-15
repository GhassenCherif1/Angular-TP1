import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class PreloadingIsTheBest implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Preload modules only if `data.preload` is true
    return route.data && route.data['preload'] ? load() : of(null);
  }
}
