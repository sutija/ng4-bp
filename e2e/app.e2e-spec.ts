import { Ng4BpPage } from './app.po';

describe('ng4-bp App', () => {
  let page: Ng4BpPage;

  beforeEach(() => {
    page = new Ng4BpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
