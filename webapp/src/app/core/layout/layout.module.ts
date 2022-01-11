
import { NgModule } from '@angular/core';
import { CoreModule } from '../../shared/core.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    LayoutComponent,
    TopNavComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
