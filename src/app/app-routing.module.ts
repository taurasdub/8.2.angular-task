import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Please configure here Router
 * Acceptance criteria:
 * 1) Default path goes to dashboard
 * 2) /dashboard path goes also to dashboard
 * 3) /detail with some id should go to hero details page
 **/

const routes: Routes = [
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
