import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-detail-cv',
  templateUrl: './master-detail-cv.component.html',
  styleUrl: './master-detail-cv.component.css'
})
export class MasterDetailCvComponent implements OnInit {
  cvs: Cv[] = [];
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {
    // Récupérer la liste des CV
    this.cvService.getCvs().subscribe(cvs => {
      this.cvs = cvs;
    });
  }

  // Redirige vers la vue de détail lorsqu'un CV est sélectionné
  onSelectCv(cv: Cv): void {
    this.router.navigate(['/list', cv.id]); // Redirection vers la route de détail
  }
}
