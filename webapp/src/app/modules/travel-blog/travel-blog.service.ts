import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelBlog } from '../../shared/travel-blog/travel-blog.interface';

@Injectable({
  providedIn: 'root',
})
export class TravelBlogService {
  readonly API_URL = "http://localhost:10000/travel-blog";

  constructor(private http: HttpClient) { }

  getAllBlogs(searchForm: any): Observable<TravelBlog[]> {
    return this.http
      .post<any>(`${this.API_URL}/load`, searchForm);
  }

  getBlogById(blogId: number): Observable<TravelBlog> {
    return this.http
      .get<any>(`${this.API_URL}/${blogId}`);
  }

  saveBlog(blog: TravelBlog): Observable<TravelBlog> {
    return this.http
      .post<TravelBlog>(`${this.API_URL}/`, blog);
  }
}
