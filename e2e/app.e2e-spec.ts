import { AppPage } from './app.po';

describe('qadmin App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display QAdmin title message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('QAdmin');
  });
});
