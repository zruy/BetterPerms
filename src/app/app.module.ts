import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeroModule} from './modules/hero/hero.module';

import {AppComponent} from './app.component';
import {InitComponent} from './modules/init/InitComponent.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'init', pathMatch: 'full'},
  {path: 'init', component: InitComponent},
  {path: 'heroes', loadChildren: './modules/hero/hero.module#HeroModule'}
];
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HeroModule,
    RouterModule.