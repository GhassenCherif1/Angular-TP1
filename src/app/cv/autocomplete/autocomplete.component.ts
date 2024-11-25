import { Component, inject } from "@angular/core";
import { FormBuilder, AbstractControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Observable, switchMap, tap } from "rxjs";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
})
export class AutocompleteComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  get search(): AbstractControl {
    return this.form.get("search")!;
  }
  form = this.formBuilder.group({ search: [""] });
  filteredCvs$: Observable<any[]> | undefined;

  ngOnInit(): void {
    this.filteredCvs$ = this.search.valueChanges.pipe(
      debounceTime(300), // Delay to avoid spamming the server
      distinctUntilChanged(), // Only trigger when the value changes
      switchMap((searchTerm: string) => this.cvService.searchCvs(searchTerm)) // Call the service method
    );
  }
  selectCv(cv: any): void {
    // Navigate to the CV details page
    this.router.navigate(['/cv', cv.id]);
  }
}
