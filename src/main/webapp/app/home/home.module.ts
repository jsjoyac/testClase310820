import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Clase31AgostoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Clase31AgostoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Clase31AgostoHomeModule {}
