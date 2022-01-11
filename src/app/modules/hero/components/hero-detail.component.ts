/**
 * User: sofia
 * Date: 2018/1/12
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../service/hero.service';
import {Hero} from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  selectedHero: Hero;
  hero: Hero;

  ngOnInit() {
    this.activatedRoute.params.subscribe(route => {
      this.selectedHero = this._heroService.getHeroById(route.heroId