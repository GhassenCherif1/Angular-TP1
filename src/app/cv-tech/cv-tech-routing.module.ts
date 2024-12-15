import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvTechComponent } from './cv-tech.component';
import { CvComponent } from '../cv/cv/cv.component';
import { DetailsCvComponent } from '../cv/details-cv/details-cv.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from '../cv/add-cv/add-cv.component';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
  },
  { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
  { path: ':id', component: DetailsCvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvTechRoutingModule {}
