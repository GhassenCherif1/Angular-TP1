import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTechComponent } from './cv-tech.component';

describe('CvTechComponent', () => {
  let component: CvTechComponent;
  let fixture: ComponentFixture<CvTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
