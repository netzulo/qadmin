import { QadminPage } from './app.po';

describe('qadmin App', function() {
  let page: QadminPage;

  beforeEach(() => {
    page = new QadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
