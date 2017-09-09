import { browser, element, by } from 'protractor';

export class QadminPage {
  navigateTo() {
    return browser.get('/');
  }

  getText(selector: string) {
    return element(by.css(selector)).getText();
  }
  getAttribute(selector: string, attr: string) {
    return element(by.css(selector)).getAttribute(attr);
  }
}
