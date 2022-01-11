import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../shared/core.module';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
