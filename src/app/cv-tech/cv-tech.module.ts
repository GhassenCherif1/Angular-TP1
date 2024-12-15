import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvTechRoutingModule } from './cv-tech-routing.module';
import { CvTechComponent } from './cv-tech.component';
import { AddCvComponent } from '../cv/add-cv/add-cv.component';
import { CvComponent } from '../cv/cv/cv.component';
import { DetailsCvComponent } from '../cv/details-cv/details-cv.component';
import { CvCardComponent } from '../cv/cv-card/cv-card.component';
import { EmbaucheComponent } from '../cv/embauche/embauche.component';
import { DefaultImagePipe } from '../cv/pipes/default-image.pipe';
import { ListComponent } from '../cv/list/list.component';
import { ItemComponent } from '../cv/item/item.component';
import { AutocompleteComponent } from '../cv/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutocompleteComponent,

    CvTechComponent,
    AddCvComponent,
    CvComponent,
    DetailsCvComponent,
    CvCardComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    ListComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,    ReactiveFormsModule,


    FormsModule,

    CvTechRoutingModule
  ]
})
export class CvTechModule { }
