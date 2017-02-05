import { RmoviesPage } from './app.po';

describe('rmovies App', function() {
  let page: RmoviesPage;

  beforeEach(() => {
    page = new RmoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
