
/**
 * User: sofia
 * Date: 2018/1/11
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HeroService} from './service/hero.service';

import {HeroesPageComponent} from './pages/heroes.page';
import {HeroesDashboardComponent} from './components/heroes-dashboard.component';
import {HeroesListsComponent} from './components/heroes-lists.component';
import {HeroDetailComponent} from './components/hero-detail.component';


const heroRoutes: Routes = [
  {
    path: 'heroes', component: HeroesPageComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: HeroesDashboardComponent},
    {path: 'lists', component: HeroesListsComponent},
    {path: ':heroId', component: HeroDetailComponent}
  ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(heroRoutes)
  ],
  declarations: [
    HeroesPageComponent,
    HeroesDashboardComponent,
    HeroesListsComponent,
    HeroDetailComponent,
  ],
  providers: [
    HeroService
  ],
  exports: [],
})

export class HeroModule {
}