
/**
 * User: sofia
 * Date: 2018/1/11
 * Version: 1.0.0
 * Description:
 */
import {Injectable} from '@angular/core';
import * as MockData from './../mocks/mock-heroes';
import {Hero} from '../models/hero';

@Injectable()
export class HeroService {
  fetchHeroes(): Hero[] {
    const heroes = MockData.HEROES;
    return heroes.map(hero => Hero.createByJSON(hero));
  }

  getHeroById(heroId: string | number) {
    const heroes = MockData.HEROES;
    return heroes.find(hero => +hero.id === +heroId);
  }
}