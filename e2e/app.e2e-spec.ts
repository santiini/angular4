import { Demo1CliPage } from './app.po';

describe('demo1-cli App', () => {
  let page: Demo1CliPage;

  beforeEach(() => {
    page = new Demo1CliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
