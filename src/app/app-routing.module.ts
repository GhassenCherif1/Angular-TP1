import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/guards/auth.guard";


const routes: Route[] = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "rh",
    loadComponent: ()=> import("./optimizationPattern/rh/rh.component").then(c => c.RhComponent) ,
  },
 // groupement des routes
 {
  path: "cv",
  loadChildren: async () => {
    const routes = [
      {
        path: '',
        loadComponent: () =>
          {return import('./cv/cv/cv.component').then(c => c.CvComponent)},
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./cv/add-cv/add-cv.component').then(c => c.AddCvComponent),
        canActivate: [AuthGuard],
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./cv/details-cv/details-cv.component').then(c => c.DetailsCvComponent),
      },
    ];
    return routes;
}
},
  {
    path: '',
    loadComponent: () =>
      import('./templates/front/front.component').then((m) => m.FrontComponent),
    loadChildren: async () => {
      const routes = [
        { path: 'todo', loadComponent: () => import('./todo/todo/todo.component').then(m => m.TodoComponent) },
        { path: 'word', loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent) },
      ];
      return routes;
    },
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./templates/admin/admin.component').then((m) => m.AdminComponent),
    loadChildren: async () => {
      const routes = [
        { path: 'color', loadComponent: () => import('./components/color/color.component').then((m) => m.ColorComponent) },
      ];
      return routes;
    },
  },
  { path: "**", // component: NF404Component
  loadComponent: () => import('./components/nf404/nf404.component').then((m) => m.NF404Component),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
