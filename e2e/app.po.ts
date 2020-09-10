import { browser, by, element } from 'protractor';

export class ProjectOnePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-ro