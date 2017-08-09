// 路由文件；
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/index.component';
import { HeroesComponent } from './HeroesComponent/index.component';
import { HeroDetailComponent } from './HeroDetail/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'detail/:id',
    component: HeroDetailComponent
  }, {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
