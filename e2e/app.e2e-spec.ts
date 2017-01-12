import { TreefishportfolioPage } from './app.po';

describe('treefishportfolio App', function() {
  let page: TreefishportfolioPage;

  beforeEach(() => {
    page = new TreefishportfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
