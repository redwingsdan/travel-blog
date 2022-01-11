import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const AppRoutes: Routes = [
  //{
  //  path: 'auth',
  //  loadChildren: () => import('@core/auth/auth.module').then(m => m.AuthModule),
  //  data: { animation: 'LoginPage' }
  //},
  {
    path: 'app',
    component: LayoutComponent,
    data: { animation: 'MainPage' },
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('app/modules/home/home.module').then(m => m.HomeModule),
        pathMatch: 'full'
      },
      {
        path: 'recipes',
        loadChildren: () => import('app/modules/recipes/recipes.module').then(m => m.RecipesModule)
      },
      {
        path: 'travel-blog',
        loadChildren: () => import('app/modules/travel-blog/travel-blog.module').then(m => m.TravelBlogModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'app/home'
  }
];
