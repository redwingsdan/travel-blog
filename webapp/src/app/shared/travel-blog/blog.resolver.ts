import { Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TravelBlogService } from '../../modules/travel-blog/travel-blog.service';
import { TravelBlog } from './travel-blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<TravelBlog> {
  constructor(@Optional() private service: TravelBlogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getBlogById(route.params.blogId);
  }
}
