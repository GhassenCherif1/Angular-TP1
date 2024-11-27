import { ResolveFn } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Cv } from '../model/cv';
import { inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { LoggerService } from 'src/app/services/logger.service';
import { ToastrService } from 'ngx-toastr';

export const cvResolver: ResolveFn<Cv[]> = (route, state): Observable<Cv[]> => {
  const cvService = inject(CvService);
  const logger = inject(LoggerService);
  const toastr = inject(ToastrService);
  return cvService.getCvs().pipe(
    catchError((error) => {
      logger.logger('Error fetching CVs: ' + error);
      toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      // Return fake CVs as fallback
      return of(cvService.getFakeCvs());
    })
  );
};
