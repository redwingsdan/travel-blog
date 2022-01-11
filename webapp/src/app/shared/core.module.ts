import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    //{ provide: FormBuilder, useClass: CoreFormBuilder }
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CoreModule { }
