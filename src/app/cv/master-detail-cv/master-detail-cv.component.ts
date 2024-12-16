import { Component, inject, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-master-detail-cv',
  templateUrl: './master-detail-cv.component.html',
  styleUrl: './master-detail-cv.component.css'
})
export class MasterDetailCvComponent implements OnInit {
  cvs : Observable<Cv[]>;
  selectedCv: Observable<Cv | null>;
  cvService = inject(CvService);
  router = inject(Router);

  constructor(){
    this.cvs = this.cvService.getCvs();
    this.selectedCv = this.cvService.selectCv$;
  }
  
  ngOnInit() {
    this.selectedCv.subscribe(cv => {
      if (cv) {
        this.router.navigate(['/list', cv.id]);
      }
    });
  }

}