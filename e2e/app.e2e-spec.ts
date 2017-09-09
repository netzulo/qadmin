import { QadminPage } from './app.po';

describe('qadmin App', function() {
  let page: QadminPage;

  beforeEach(() => {
    page = new QadminPage();
    page.navigateTo();
  });

  it('should display message saying QAdmin', () => {    
    expect(page.getText("#main-menu-title")).toEqual('QAdmin');
  });
  it('should display description_url as image', () => {
    expect(page.getAttribute("#description_url", "src")).toEqual('https://dummyimage.com/900x600/000/00ffd5.png');
  });
  it('should display description_txt saying Collaborate with us on https://github.com/netzulo/qalab', () => {
    expect(page.getText("#description_txt")).toEqual('Collaborate with us on https://github.com/netzulo/qalab');
  });
});
