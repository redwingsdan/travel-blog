import { Routes } from '@angular/router';
import { BlogResolver } from '../../shared/travel-blog/blog.resolver';
import { ArticleComponent } from './article/article.component';
import { TravelBlogComponent } from './travel-blog.component';

export const TravelBlogRoutes: Routes = [
  {
    path: '',
    component: TravelBlogComponent
  },
  {
    path: ':blogId',
    data: {
      title: 'Blog'
    },
    resolve: {
      article: BlogResolver,
    },
    component: ArticleComponent,
    children: []
  }
];
