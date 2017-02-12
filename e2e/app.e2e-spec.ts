import { Webapiclient1Page } from './app.po';

describe('webapiclient1 App', function() {
  let page: Webapiclient1Page;

  beforeEach(() => {
    page = new Webapiclient1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
