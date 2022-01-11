import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TravelBlogComponent } from './travel-blog.component';
import { TravelBlogRoutes } from './travel-blog.routes';
import { CoreModule } from '../../shared/core.module';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    TravelBlogComponent,
    BlogCardComponent,
    ArticleComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(TravelBlogRoutes)
  ],
  providers: []
})
export class TravelBlogModule { }
