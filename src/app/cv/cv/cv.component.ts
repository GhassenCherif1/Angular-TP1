import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

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
    private cvService: CvService,
    private route: ActivatedRoute
  ) {
    
    const resolvedCvs = this.route.snapshot.data["cvs"];
    this.cvs$ = of(resolvedCvs)

    
    this.juniors$ = this.cvs$.pipe(map((cvs) => cvs.filter((cv) => cv.age < 40)));
    this.seniors$ = this.cvs$.pipe(map((cvs) => cvs.filter((cv) => cv.age >= 40)));

    
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');

    
    this.cvService.selectCv$.subscribe((cv) => (this.selectedCv = cv));
  }

  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
