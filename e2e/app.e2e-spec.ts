import { FarmMontPage } from './app.po';

describe('farm-mont App', function() {
  let page: FarmMontPage;

  beforeEach(() => {
    page = new FarmMontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
