/**
 * User: sofia
 * Date: 2018/1/11
 * Version: 1.0.0
 * Description:
 */

interface IHeroInterface {
  id?: string | number;
  name?: string;
}

export class Hero implements IHeroInterface {
  id: string | number;
  name: string;

  static createByJSON(json: IHeroInterface = {}) {
    const {id, name} = json;
    return new Hero({id, name});
  }

  constructor(attr: IHeroInterface = {}) {
    this.id = attr.id;
    t