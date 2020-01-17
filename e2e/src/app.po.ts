import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('gfk-root .content span')).getText() as Promise<string>;
  }

  getButton() {
    return element(by.css('button'));
  }
}
