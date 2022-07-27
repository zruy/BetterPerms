/**
 * User: sofia
 * Date: 2018/1/11
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from './../service/hero.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss']
})

export class HeroesDashboardComponent implements 