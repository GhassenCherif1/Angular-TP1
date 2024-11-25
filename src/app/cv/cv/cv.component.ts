import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvs$: Observable<Cv[]>; // Observable for all CVs
  juniors$: Observable<Cv[]>; // Observable for juniors
  seniors$: Observable<Cv[]>; // Observable for seniors
  selectedCv: Cv | null = null;
  date = new Date();

  activeTab = 'juniors'; // Track active tab

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    // Fetch CVs using async pipe and handle errors with catchError
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError((error) => {
        // Log the error and show a toast notification
        this.logger.logger('Error fetching CVs: ' + error);
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
        // Return fake CVs as fallback
        return of(this.cvService.getFakeCvs());
      })
    );

    // Divide CVs into juniors and seniors streams
    this.juniors$ = this.cvs$.pipe(map((cvs) => cvs.filter((cv) => cv.age < 40)));
    this.seniors$ = this.cvs$.pipe(map((cvs) => cvs.filter((cv) => cv.age >= 40)));

    // Log and show welcome message
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');

    // Subscribe to selected CV changes
    this.cvService.selectCv$.subscribe((cv) => (this.selectedCv = cv));
  }

  // Switch active tab
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
