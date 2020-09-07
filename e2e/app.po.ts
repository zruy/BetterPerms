import { browser, by, element } from 'protractor';

export class ProjectOnePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText(