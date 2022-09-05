/**
 * User: sofia
 * Date: 2018/1/11
 * Version: 1.0.0
 * Description:
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../models/hero';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.scss']
})

