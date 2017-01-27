import { TeVeoEnGesellVAngularPage } from './app.po';

describe('te-veo-en-gesell-v-angular App', function() {
  let page: TeVeoEnGesellVAngularPage;

  beforeEach(() => {
    page = new TeVeoEnGesellVAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
