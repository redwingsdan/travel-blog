import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelBlog } from '../../../shared/travel-blog/travel-blog.interface';
import { TravelBlogService } from '../travel-blog.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: TravelBlog;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: TravelBlogService
  ) {
    const form = this.initForm();
    this.form = this.fb.group(form);
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.article = data.article;
      this.form.patchValue(this.article);
    });
  }

  back() {
    this.router.navigate([`/app/travel-blog`], {relativeTo: this.route});
  }

  edit() {
    this.form.enable();
  }

  save() {
    this.service.saveBlog(this.article).subscribe(savedArticle => {
        this.form.disable();
    });
  }

  private initForm(): any {
    return {
      textContent: null,
      title: [null, Validators.required]
    };
  }

  get formValue(): any {
    return this.form.value;
  }
}
