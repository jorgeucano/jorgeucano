import { JorgeucanoPage } from './app.po';

describe('jorgeucano App', () => {
  let page: JorgeucanoPage;

  beforeEach(() => {
    page = new JorgeucanoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
